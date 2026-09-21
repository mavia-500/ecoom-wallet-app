import Link from "next/link";
import React from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Story | Hilyah Genuine Leather Wallets Pakistan",
  description:
    "Learn how Hilyah crafts and ships genuine leather wallets from Islamabad — honest materials, clear policies, and cash on delivery across Pakistan.",
  path: "/about",
  keywords: [
    "Hilyah story",
    "leather craftsman Pakistan",
    "handmade wallets Islamabad",
  ],
});

const Page = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
        Our story
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
        Hilyah — leather made with honesty
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
        We started Hilyah to offer Pakistani men genuine leather wallets without
        the marketplace guesswork. Every piece is selected and prepared with care,
        shipped from Islamabad, and backed by clear policies you can actually use.
      </p>

      <div className="mt-10 overflow-hidden">
        <img
          src="/images/IMG_20250501_115816_569.webp"
          alt="Hilyah leather products"
          className="h-64 w-full object-cover sm:h-80"
        />
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
            What we stand for
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            <li>
              <strong className="text-[var(--ink)]">Genuine leather</strong> —
              full-grain pieces built for years of daily carry.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Transparent shopping</strong> —
              cash on delivery, named couriers (TCS & Leopard), and a 7-day
              return window.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Human support</strong> —
              WhatsApp and phone help before and after you order.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
            Where we operate
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            Orders ship from Islamabad across Pakistan. Reach us anytime at{" "}
            <a
              href="mailto:hilyah967@gmail.com"
              className="font-medium text-[var(--cognac)] underline-offset-2 hover:underline"
            >
              hilyah967@gmail.com
            </a>{" "}
            or{" "}
            <a
              href="tel:+923285478737"
              className="font-medium text-[var(--cognac)] underline-offset-2 hover:underline"
            >
              +92 328 5478737
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/bifoldwallet"
              className="btn-primary rounded-md px-5 py-2.5 text-sm"
            >
              Shop wallets
            </Link>
            <Link
              href="/contact"
              className="btn-secondary rounded-md px-5 py-2.5 text-sm"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
