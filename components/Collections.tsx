import Link from "next/link";
import Image from "next/image";
import React from "react";

const collections = [
  {
    href: "/bifoldwallet",
    title: "Bi-Fold",
    image: "/images/wem.webp",
    alt: "bi-fold genuine leather wallet collection",
  },
  {
    href: "/trifoldwallet",
    title: "Tri-Fold",
    image: "/images/ad.webp",
    alt: "tri-fold genuine leather wallet collection",
  },
  {
    href: "/cardholder",
    title: "Card Holder",
    image: "/images/cardh.webp",
    alt: "slim leather card holder collection",
  },
  {
    href: "/longwallet",
    title: "Traveller Wallet",
    image: "/images/d.webp",
    alt: "Hilyah long leather wallet collection",
  },
];

const Collections = () => {
  return (
    <section
      className="px-4 pb-6 pt-2 sm:px-6 sm:pb-8 sm:pt-3 lg:px-8"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 520px" }}
    >
      <div className="mx-auto mb-6 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          Shop by collection
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
          Handcrafted from rich full-grain leather built for daily use and
          meant to age beautifully with you.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-4">
        {collections.map((item) => (
          <Link key={item.href} href={item.href} className="group block">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--bg-deep)] sm:aspect-[4/5]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-end px-2 pb-4 text-center sm:px-4 sm:pb-8"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 35%, rgba(26,22,20,0.75) 100%)",
                }}
              >
                <h3 className="font-display text-base font-semibold text-[#faf9f7] sm:text-2xl">
                  {item.title}
                </h3>
                <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#faf9f7] underline-offset-4 group-hover:underline sm:mt-3 sm:text-xs">
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
