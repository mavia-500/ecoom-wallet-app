import Link from "next/link";
import React from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us | Hilyah Genuine Leather Wallets Pakistan",
  description:
    "Learn about Hilyah, a Pakistan-based leather brand crafting genuine bifold, trifold, card holder, and traveller wallets with cash on delivery and clear policies.",
  path: "/about",
  keywords: [
    "Hilyah about us",
    "leather brand Pakistan",
    "handmade wallets Islamabad",
    "genuine leather wallets story",
  ],
});

const Page = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
        About us
      </p>
      <h1 className="font-display mt-3 text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
        Hilyah genuine leather, made with care
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
        Hilyah is a Pakistan-based leather brand built for men who want a real
        wallet that lasts. We craft bifolds, trifolds, card holders, traveller wallets,
        and gifts from genuine leather, then ship with cash on delivery across
        Pakistan.
      </p>

      <div className="mt-10 overflow-hidden">
        <img
          src="/images/wem.webp"
          alt="genuine leather bifold wallet from Hilyah"
          className="h-64 w-full object-cover sm:h-80"
        />
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
          Our story
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
          <p>
            We started Hilyah because finding a trustworthy leather wallet online
            in Pakistan was harder than it should be. Too many listings look
            premium in photos and feel thin or synthetic in hand. We wanted a
            brand that shows honest materials, clear prices, and support you can
            actually reach.
          </p>
          <p>
            From our workshop side in Islamabad, every piece is selected and
            checked before it ships. Our goal is simple: full-grain character,
            solid stitching, and a wallet that gets better with daily use, not
            worse after a few months.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
          What we make
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
          Whether you need a slim everyday bifold, extra room in a trifold, a
          pocket-friendly card holder, or a traveller wallet for cash and cards, Hilyah
          covers the essentials. We also offer gift-ready pieces for birthdays,
          Eid, and office occasions.
        </p>
        <ul className="mt-5 grid gap-3 text-sm text-[var(--ink-soft)] sm:grid-cols-2 sm:text-base">
          <li>
            <Link href="/bifoldwallet" className="font-medium text-[var(--cognac)] hover:underline">
              Bi-fold wallets
            </Link>{" "}
            for everyday pocket carry
          </li>
          <li>
            <Link href="/trifoldwallet" className="font-medium text-[var(--cognac)] hover:underline">
              Tri-fold wallets
            </Link>{" "}
            when you need more space
          </li>
          <li>
            <Link href="/cardholder" className="font-medium text-[var(--cognac)] hover:underline">
              Card holders
            </Link>{" "}
            for a slim minimal carry
          </li>
          <li>
            <Link href="/longwallet" className="font-medium text-[var(--cognac)] hover:underline">
              Traveller wallets
            </Link>{" "}
            for cash and cards together
          </li>
          <li>
            <Link href="/gifts" className="font-medium text-[var(--cognac)] hover:underline">
              Gifts
            </Link>{" "}
            ready to give with confidence
          </li>
        </ul>
      </section>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
            What we stand for
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            <li>
              <strong className="text-[var(--ink)]">Genuine leather.</strong>{" "}
              Full-grain pieces built for years of daily carry and a natural
              patina over time.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Transparent shopping.</strong>{" "}
              Cash on delivery, named couriers (TCS &amp; Leopard), and a 7-day
              return window.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Human support.</strong>{" "}
              WhatsApp and phone help before and after you order, from real
              people.
            </li>
            <li>
              <strong className="text-[var(--ink)]">Checked before shipping.</strong>{" "}
              Every wallet is reviewed so you receive what you ordered.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">
            Where we operate
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            Orders ship from Islamabad across Pakistan, usually within 3 to 4
            working days. Reach us anytime at{" "}
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
          <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            Prefer to message first? Ask about sizing, colors, gift options, or
            current sale pieces. We are happy to help you pick the right wallet.
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
