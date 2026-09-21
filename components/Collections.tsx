import Link from "next/link";
import Image from "next/image";
import React from "react";

const collections = [
  {
    href: "/bifoldwallet",
    title: "Bi-Fold",
    image: "/images/wem.webp",
    alt: "Bi fold leather wallet",
  },
  {
    href: "/trifoldwallet",
    title: "Tri-Fold",
    image: "/images/ad.webp",
    alt: "Tri fold leather wallet",
  },
  {
    href: "/cardholder",
    title: "Card Holder",
    image: "/images/cardh.webp",
    alt: "Leather card holder",
  },
  {
    href: "/longwallet",
    title: "Long Wallet",
    image: "/images/d.webp",
    alt: "Long leather wallet",
  },
];

const Collections = () => {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          Shop by collection
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
          Handcrafted from rich full-grain leather — built for daily use and
          meant to age beautifully with you.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((item) => (
          <Link key={item.href} href={item.href} className="group block">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--bg-deep)]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-8 text-center"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 35%, rgba(26,22,20,0.75) 100%)",
                }}
              >
                <h3 className="font-display text-2xl font-semibold text-[#faf9f7]">
                  {item.title}
                </h3>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#faf9f7] underline-offset-4 group-hover:underline">
                  View products
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Collections;
