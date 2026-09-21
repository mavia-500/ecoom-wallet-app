import React from "react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Shipping, Returns & Privacy Policy | Hilyah",
  description:
    "Read Hilyah policies for cash on delivery shipping, 7-day returns, refunds, and privacy. Clear terms for leather wallet orders in Pakistan.",
  path: "/policy",
  keywords: [
    "Hilyah return policy",
    "wallet shipping Pakistan",
    "COD policy",
  ],
});

const Page = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-display text-center text-4xl font-semibold text-[var(--ink)]">
        Policies & information
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--ink-soft)]">
        Clear rules so you know exactly how returns, shipping, and privacy work
        at Hilyah.
      </p>

      <section
        className="mt-10 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          Return & exchange
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          We offer a <strong className="text-[var(--ink)]">7-day return policy</strong>{" "}
          from the day you receive your order. Items must be unused, in original
          packaging, with tags and proof of purchase.
        </p>
        <p className="leading-7 text-[var(--ink-soft)]">
          Email{" "}
          <a
            href="mailto:hilyah967@gmail.com"
            className="font-medium text-[var(--cognac)] underline-offset-2 hover:underline"
          >
            hilyah967@gmail.com
          </a>{" "}
          for approval before shipping returns to:{" "}
          <em>Islamabad</em>.
        </p>
        <p className="leading-7 text-[var(--ink-soft)]">
          Damaged or incorrect items: contact us as soon as you open the parcel.
          Sale items and gift cards are non-returnable. Approved refunds are
          processed within 4 business days.
        </p>
      </section>

      <section
        className="mt-6 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          Shipping
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          All orders ship from <strong className="text-[var(--ink)]">Islamabad</strong>.
          In-stock items usually leave within 3–5 business days. We deliver with{" "}
          <strong className="text-[var(--ink)]">Cash on Delivery</strong>.
        </p>
        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--ink-soft)]">
          <li>Standard delivery: 2–5 business days</li>
          <li>Delays during lockdowns or protests: 5–10 business days</li>
        </ul>
      </section>

      <section
        className="mt-6 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          Privacy
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          We only collect what we need to fulfill your order — name, phone,
          address, and email. We do not sell or share your data with third
          parties for marketing. Your information is used for order confirmation
          and delivery updates only.
        </p>
      </section>

      <div className="mt-10 text-center">
        <Link href="/contact" className="btn-primary inline-block rounded-md px-5 py-2.5 text-sm">
          Questions? Contact us
        </Link>
      </div>
    </div>
  );
};

export default Page;
