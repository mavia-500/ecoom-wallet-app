import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

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
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) return false;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Hilyah Orders" <${user}>`,
    to: adminEmail,
    subject,
    html,
  });
  return true;
}

async function sendWithFormSubmit(
  adminEmail: string,
  subject: string,
  fields: Record<string, string>,
) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(adminEmail)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: fields.fullName,
        email: adminEmail,
        _replyto: adminEmail,
        _subject: subject,
        _template: "table",
        _captcha: "false",
        message: fields.message,
        ...fields,
      }),
    },
  );

  const result = await response.json().catch(() => ({}));
  console.log("FormSubmit response:", response.status, result);

  if (!response.ok) {
    throw new Error(result.message || "FormSubmit request failed");
  }

  return result;
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

  const total = lines.reduce((sum, line) => sum + line.lineTotal, 0);

  const adminEmail =
    process.env.ADMIN_EMAIL || process.env.EMAIL_USER || "hilyah967@gmail.com";

  const subject = `New Hilyah Order — ${fullName} (Rs ${total})`;

  const itemsHtml = lines
    .map(
      (line) => `
      <tr>
        <td style="padding:6px 8px;border:1px solid #ddd;">${line.title}</td>
        <td style="padding:6px 8px;border:1px solid #ddd;">${line.color || "—"}</td>
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
    <p><strong>Notes:</strong> ${notes || "—"}</p>
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
    <p style="margin-top:12px;"><strong>Grand Total:</strong> Rs ${total}</p>
  `;

  const plainMessage = `
New Hilyah Order
Order ID: ${orderId}
Name: ${fullName}
Phone: ${phone}
Address: ${address}
Province: ${province}
City: ${city}
Notes: ${notes || "—"}

Items:
${lines
  .map(
    (line) =>
      `- ${line.title} (${line.color || "—"}) x${line.qty} = Rs ${line.lineTotal}`,
  )
  .join("\n")}

Grand Total: Rs ${total}
  `.trim();

  try {
    const sentViaGmail = await sendWithGmail(adminEmail, subject, html);
    if (sentViaGmail) {
      return NextResponse.json(
        { message: "Order placed successfully!", orderId, emailed: true },
        { status: 200 },
      );
    }

    const formResult = await sendWithFormSubmit(adminEmail, subject, {
      fullName,
      phone,
      address,
      province,
      city,
      notes: notes || "—",
      orderId,
      total: `Rs ${total}`,
      message: plainMessage,
    });

    const needsActivation =
      typeof formResult?.message === "string" &&
      /confirm|activate|check your email/i.test(formResult.message);

    return NextResponse.json(
      {
        message: needsActivation
          ? "Order saved. Check hilyah967@gmail.com (and Spam) for a FormSubmit confirmation email, click Activate once, then new orders will arrive."
          : "Order placed successfully!",
        orderId,
        emailed: !needsActivation,
        formSubmit: formResult,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending order email:", error);
    return NextResponse.json(
      {
        message:
          "Order details could not be emailed. Please contact us on WhatsApp with your order.",
        orderId,
        emailed: false,
      },
      { status: 500 },
    );
  }
}
