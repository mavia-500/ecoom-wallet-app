import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy | Hilyah Leather Wallets Pakistan",
  description:
    "Hilyah privacy policy: how we collect and use your name, phone, address, and email to fulfill leather wallet orders in Pakistan.",
  path: "/privacy",
  keywords: [
    "Hilyah privacy policy",
    "wallet store privacy Pakistan",
    "customer data policy",
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
        Policy
      </p>
      <h1 className="font-display mt-3 text-center text-4xl font-semibold text-[var(--ink)]">
        Privacy policy
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--ink-soft)]">
        How Hilyah handles your personal information when you shop with us.
      </p>

      <section
        className="mt-10 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          What we collect
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          We only collect what we need to fulfill your order: name, phone number,
          delivery address, and email (if you provide it or subscribe to our
          newsletter).
        </p>
      </section>

      <section
        className="mt-6 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          How we use your information
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          Your information is used for order confirmation, delivery updates,
          customer support, and (if you opted in) newsletter updates about sales
          and new products. We do not sell or share your data with third parties
          for marketing.
        </p>
      </section>

      <section
        className="mt-6 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          Couriers and service partners
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          Delivery partners such as TCS or Leopard receive only the details
          needed to deliver your parcel (name, phone, and address). Payment for
          COD orders is collected at delivery.
        </p>
      </section>

      <section
        className="mt-6 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          Contact
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          Questions about your data? Email{" "}
          <a
            href="mailto:hilyah967@gmail.com"
            className="font-medium text-[var(--cognac)] underline-offset-2 hover:underline"
          >
            hilyah967@gmail.com
          </a>{" "}
          or call{" "}
          <a
            href="tel:+923285478737"
            className="font-medium text-[var(--cognac)] underline-offset-2 hover:underline"
          >
            +92 328 5478737
          </a>
          .
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
          href="/policy"
          className="btn-secondary rounded-md px-5 py-2.5 text-sm"
        >
          Return &amp; exchange
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
