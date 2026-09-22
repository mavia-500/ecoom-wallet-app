import React from "react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Hilyah | Leather Wallet Support Pakistan",
  description:
    "Contact Hilyah for orders, shipping, or wallet questions. WhatsApp and email support from Islamabad. Cash on delivery across Pakistan.",
  path: "/contact",
  keywords: ["contact Hilyah", "Hilyah WhatsApp", "wallet support Pakistan"],
});

const Page = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-center text-4xl font-semibold text-[var(--ink)]">
        Contact Hilyah
      </h1>
      <p className="mx-auto mt-3 max-w-md text-center text-sm text-[var(--ink-soft)]">
        Real support for real orders — ask about sizing, shipping, or gifts
        before you buy.
      </p>

      <div
        className="mt-10 space-y-5 bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
            Trade name
          </h2>
          <p className="mt-1 text-lg font-medium text-[var(--ink)]">Hilyah.pk</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
            Phone
          </h2>
          <a
            href="tel:+923285478737"
            className="mt-1 block text-lg font-medium text-[var(--cognac)] hover:underline"
          >
            +92 328 5478737
          </a>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
            WhatsApp
          </h2>
          <a
            href="https://wa.me/923285478737"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-lg font-medium text-[var(--cognac)] hover:underline"
          >
            +92 328 5478737
          </a>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
            Email
          </h2>
          <a
            href="mailto:hilyah967@gmail.com"
            className="mt-1 block text-lg font-medium text-[var(--cognac)] hover:underline"
          >
            hilyah967@gmail.com
          </a>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)]">
            Dispatch from
          </h2>
          <p className="mt-1 text-[var(--ink)]">Islamabad, Pakistan</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://wa.me/923285478737?text=Hello%2C%20I%20have%20a%20question%20about%20Hilyah"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-md px-5 py-2.5 text-sm"
        >
          Chat on WhatsApp
        </a>
        <Link href="/policy" className="btn-secondary rounded-md px-5 py-2.5 text-sm">
          Read policies
        </Link>
      </div>
    </div>
  );
};

export default Page;
