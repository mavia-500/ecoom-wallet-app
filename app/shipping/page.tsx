import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Shipping Policy | Hilyah Leather Wallets Pakistan",
  description:
    "Hilyah shipping policy: cash on delivery across Pakistan, Rs 300 delivery charges, and typical 2-5 business day delivery from Islamabad.",
  path: "/shipping",
  keywords: [
    "Hilyah shipping policy",
    "wallet delivery Pakistan",
    "COD shipping",
    "delivery charges Pakistan",
  ],
});

export default function ShippingPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
        Policy
      </p>
      <h1 className="font-display mt-3 text-center text-4xl font-semibold text-[var(--ink)]">
        Shipping policy
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--ink-soft)]">
        How we ship leather wallets from Islamabad across Pakistan.
      </p>

      <section
        className="mt-10 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          Delivery overview
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          All orders ship from <strong className="text-[var(--ink)]">Islamabad</strong>.
          In-stock items usually leave within 3-5 business days. We deliver with{" "}
          <strong className="text-[var(--ink)]">Cash on Delivery (COD)</strong>{" "}
          nationwide.
        </p>
        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--ink-soft)]">
          <li>Standard delivery: 2-5 business days after dispatch</li>
          <li>Delivery charges: Rs 300 nationwide</li>
          <li>Delays during lockdowns or protests: 5-10 business days</li>
          <li>Couriers: TCS and Leopard (as available in your area)</li>
        </ul>
      </section>

      <section
        className="mt-6 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          Cash on delivery
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          Pay when your parcel arrives. Please keep your phone reachable so the
          courier can confirm delivery. If an address or phone number is
          incomplete, dispatch may be delayed until we can confirm details with
          you.
        </p>
      </section>

      <section
        className="mt-6 space-y-4 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
          Order updates
        </h2>
        <p className="leading-7 text-[var(--ink-soft)]">
          After you place an order, we confirm on WhatsApp or phone when needed.
          Tracking details are shared once your parcel is handed to the courier.
        </p>
      </section>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/policy"
          className="btn-secondary rounded-md px-5 py-2.5 text-sm"
        >
          Return &amp; exchange
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
