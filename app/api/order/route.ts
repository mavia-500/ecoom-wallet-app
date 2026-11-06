import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import dbConnect from "@/config/db";
import Orders from "@/models/order";
import { DELIVERY_CHARGE, withDelivery } from "@/lib/pricing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type CartItemPayload = {
  id: number | string;
  title: string;
  image?: string;
  color?: string;
  price: number | string;
  discountedPrice?: number | string;
  category?: string;
  quantity?: number | string;
};

async function sendWithGmail(adminEmail: string, subject: string, html: string) {
  const user = process.env.EMAIL_USER?.trim();
  // Google shows app passwords with spaces; SMTP login needs 16 chars with no spaces.
  const pass = process.env.EMAIL_PASS?.replace(/\s+/g, "").trim();
  if (!user || !pass) {
    console.error(
      "Gmail skipped: EMAIL_USER or EMAIL_PASS is not set on this server set them first",
    );
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    await transporter.sendMail({
      from: `"Hilyah Orders" <${user}>`,
      to: adminEmail,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error("Gmail send failed, will try fallback:", error);
    return false;
  }
}

function envFlags() {
  return {
    gmailConfigured: Boolean(
      process.env.EMAIL_USER?.trim() &&
        process.env.EMAIL_PASS?.replace(/\s+/g, ""),
    ),
    hasEmailUser: Boolean(process.env.EMAIL_USER?.trim()),
    hasEmailPass: Boolean(process.env.EMAIL_PASS?.replace(/\s+/g, "")),
    adminConfigured: Boolean(process.env.ADMIN_EMAIL || process.env.EMAIL_USER),
    mongoConfigured: Boolean(process.env.MONGO_URI),
  };
}

async function saveOrder(payload: Record<string, unknown>) {
  try {
    await dbConnect();
    await Orders.create(payload);
    return { saved: true, saveError: "" };
  } catch (error) {
    const saveError =
      error instanceof Error ? error.message : "Unknown order save error";
    console.error("Order save failed:", error);
    return { saved: false, saveError };
  }
}

function normalizeItems(body: any): CartItemPayload[] {
  if (Array.isArray(body.cartItems) && body.cartItems.length > 0) {
    return body.cartItems;
  }

  const item = body.itemData;
  if (item?.title) {
    return [
      {
        id: item.id,
        title: item.title,
        image: item.image,
        color: item.color,
        price: item.price,
        discountedPrice: item.discountedPrice,
        quantity: 1,
      },
    ];
  }

  return [];
}

export async function GET() {
  return NextResponse.json(envFlags());
}

export async function POST(req: Request) {
  const orderId = uuidv4();
  const body = await req.json();
  const { fullName, phone, address, province, city, notes } =
    body.formData || {};

  const items = normalizeItems(body);

  if (!fullName || !phone || !address || !province || !city) {
    return NextResponse.json(
      {
        message:
          "All the fields are required except notes. Please fill the remaining fields or contact us on WhatsApp.",
      },
      { status: 401 },
    );
  }

  if (items.length === 0) {
    return NextResponse.json(
      { message: "No products in this order." },
      { status: 401 },
    );
  }

  const lines = items.map((item) => {
    const qty = Number(item.quantity || 1);
    const unit = Number(item.price) - Number(item.discountedPrice || 0);
    const lineTotal = unit * qty;
    return {
      ...item,
      qty,
      unit,
      lineTotal,
    };
  });

  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  const total = withDelivery(subtotal);

  const adminEmail =
    process.env.ADMIN_EMAIL || process.env.EMAIL_USER || "hilyah967@gmail.com";

  const subject = `New Hilyah Order ${fullName} (Rs ${total})`;

  const itemsHtml = lines
    .map(
      (line) => `
      <tr>
        <td style="padding:6px 8px;border:1px solid #ddd;">${line.title}</td>
        <td style="padding:6px 8px;border:1px solid #ddd;">${line.color || " "}</td>
        <td style="padding:6px 8px;border:1px solid #ddd;">${line.qty}</td>
        <td style="padding:6px 8px;border:1px solid #ddd;">Rs ${line.unit}</td>
        <td style="padding:6px 8px;border:1px solid #ddd;">Rs ${line.lineTotal}</td>
      </tr>`,
    )
    .join("");

  const html = `
    <h2>New Order Received</h2>
    <p><strong>Order ID:</strong> ${orderId}</p>
    <h3>Customer</h3>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Province:</strong> ${province}</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>Notes:</strong> ${notes || " "}</p>
    <h3>Items</h3>
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      <thead>
        <tr>
          <th style="padding:6px 8px;border:1px solid #ddd;text-align:left;">Product</th>
          <th style="padding:6px 8px;border:1px solid #ddd;text-align:left;">Color</th>
          <th style="padding:6px 8px;border:1px solid #ddd;text-align:left;">Qty</th>
          <th style="padding:6px 8px;border:1px solid #ddd;text-align:left;">Unit</th>
          <th style="padding:6px 8px;border:1px solid #ddd;text-align:left;">Total</th>
        </tr>
      </thead>
      <tbody>${itemsHtml}</tbody>
    </table>
    <p style="margin-top:12px;"><strong>Subtotal:</strong> Rs ${subtotal}</p>
    <p><strong>Delivery:</strong> Rs ${DELIVERY_CHARGE}</p>
    <p><strong>Grand Total:</strong> Rs ${total}</p>
  `;

  const flags = envFlags();
  let emailed = false;
  let emailError = flags.gmailConfigured ? "gmail_failed" : "gmail_env_missing";

  try {
    console.log("Order email env:", flags);
    emailed = await sendWithGmail(adminEmail, subject, html);
    emailError = emailed ? "" : emailError;
  } catch (error) {
    console.error("Error sending order email:", error);
    emailError = "email_exception";
  }

  const { saved, saveError } = await saveOrder({
    orderId,
    fullName,
    phone,
    address,
    province,
    city,
    notes: notes || "",
    items: lines.map((line) => ({
      id: line.id,
      title: line.title,
      color: line.color || "",
      qty: line.qty,
      unit: line.unit,
      lineTotal: line.lineTotal,
    })),
    subtotal,
    delivery: DELIVERY_CHARGE,
    total,
    emailed,
  });

  if (emailed || saved) {
    return NextResponse.json(
      {
        message: "Order placed successfully!",
        orderId,
        emailed,
        saved,
        ...flags,
      },
      { status: 200 },
    );
  }

  return NextResponse.json(
    {
      message:
        "Order details could not be emailed. Please contact us on WhatsApp with your order.",
      orderId,
      emailed: false,
      saved: false,
      emailError,
      saveError,
      ...flags,
    },
    { status: 500 },
  );
}
