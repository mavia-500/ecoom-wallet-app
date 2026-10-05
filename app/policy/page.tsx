import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Return & Exchange Policy | Hilyah Pakistan",
  description:
    "Hilyah 7-day return and exchange policy for unused genuine leather wallets. Clear refund rules and support from Islamabad, Pakistan.",
  path: "/policy",
  keywords: [
    "Hilyah return policy",
    "wallet exchange Pakistan",
    "7-day return window",
  ],
});

export default function ReturnExchangePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
        Policy
      </p>
      <h1 className="font-display mt-3 text-center text-4xl font-semibold text-[var(--ink)]">
        Return &amp; exchange policy
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--ink-soft)]">
        Clear rules so you know exactly how returns and exchanges work at Hilyah.
      </p>

      <section
        id="return-exchange"
        className="mt-10 scroll-mt-24 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          7-day return window
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
          for approval before shipping returns to: <em>Islamabad</em>.
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
          Lifetime leather warranty
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          Hilyah backs craftsmanship on genuine leather. Normal wear and aging of
          leather are expected. Manufacturing defects in stitching or materials
          may be reviewed for repair or replacement support. Contact us with
          photos and your order details for help.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/shipping"
          className="btn-secondary rounded-md px-5 py-2.5 text-sm"
        >
          Shipping policy
        </Link>
        <Link
          href="/privacy"
          className="btn-secondary rounded-md px-5 py-2.5 text-sm"
        >
          Privacy policy
        </Link>
        <Link
          href="/contact"
          className="btn-primary rounded-md px-5 py-2.5 text-sm"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
