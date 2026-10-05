import { NextResponse } from "next/server";
import dbConnect from "@/config/db";
import Subscriber from "@/models/subscriber";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function notifyAdmin(email: string) {
  const adminEmail =
    process.env.ADMIN_EMAIL || process.env.EMAIL_USER || "hilyah967@gmail.com";

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(adminEmail)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: "Newsletter subscriber",
          email,
          _replyto: email,
          _subject: `New Hilyah newsletter signup: ${email}`,
          _template: "table",
          _captcha: "false",
          message: `Someone subscribed to the Hilyah newsletter.\nEmail: ${email}`,
        }),
      },
    );
    await response.json().catch(() => ({}));
  } catch (error) {
    console.error("Newsletter notify failed:", error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body.email || "")
      .trim()
      .toLowerCase();

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    await dbConnect();

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return NextResponse.json({
        message: "You are already subscribed. Thank you!",
        already: true,
      });
    }

    await Subscriber.create({ email });
    await notifyAdmin(email);

    return NextResponse.json({
      message: "Thanks for subscribing! You will hear from us soon.",
      already: false,
    });
  } catch (error: unknown) {
    // Duplicate key from race condition
    const code =
      typeof error === "object" && error && "code" in error
        ? (error as { code?: number }).code
        : undefined;
    if (code === 11000) {
      return NextResponse.json({
        message: "You are already subscribed. Thank you!",
        already: true,
      });
    }

    console.error("Newsletter subscribe error:", error);
    return NextResponse.json(
      {
        message:
          "Could not subscribe right now. Please try again or message us on WhatsApp.",
      },
      { status: 500 },
    );
  }
}
