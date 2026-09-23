"use client";

import Link from "next/link";
import CardImageCarousel from "@/components/CardImageCarousel";
import { productHref } from "@/lib/productSlug";

type TopItem = {
  id: number;
  title: string;
  images: string[];
  price: number;
  discountedPrice: number;
  category: string;
};

const topItems: TopItem[] = [
  {
    id: 14,
    title: "Wax Pull Up Leather Wallet",
    images: [
      "/assets/bifold/IMG-20251124-WA0003_b82sgl.webp",
      "/assets/bifold/IMG-20251124-WA0002_rksaex.webp",
    ],
    price: 3400,
    discountedPrice: 200,
    category: "bifoldwallet",
  },
  {
    id: 2,
    title: "Pop up leather wallet",
    images: [
      "/assets/bifold/poup1.webp",
      "/assets/bifold/poup1..webp",
      "/assets/bifold/poup.webp",
    ],
    price: 2400,
    discountedPrice: 400,
    category: "bifoldwallet",
  },
  {
    id: 15,
    title: "Wax Pull Up Card Holder Mini Wallet",
    images: [
      "/assets/bifold/be6d3cbd-926e-42bd-83ed-e29497832a7a.webp",
      "/assets/bifold/1.webp",
    ],
    price: 2600,
    discountedPrice: 200,
    category: "cardholder",
  },
  {
    id: 1,
    title: "Leather Long Wallet",
    images: [
      "/assets/longwallet/Gemini_Generated_Image_7pywpy7pywpy7pyw (1).webp",
      "/assets/longwallet/Gemini_Generated_Image_kq5az0kq5az0kq5a.webp",
    ],
    price: 2700,
    discountedPrice: 300,
    category: "longwallet",
  },
];

const TopSelling = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
          Customer favorites
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          Top selling
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--ink-soft)] sm:text-base">
          Our most-loved leather wallets — the pieces customers reorder and gift
          most often.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {topItems.map((item, index) => {
          const finalPrice = item.price - item.discountedPrice;
          const hasDiscount = item.discountedPrice > 0;
          const href = productHref(item.category, item);

          return (
            <div
              key={`${item.category}-${item.id}`}
              className="bg-[var(--surface)] transition-shadow hover:shadow-md"
            >
              <CardImageCarousel
                images={item.images}
                alt={`${item.title} —  bestselling leather wallet`}
                href={href}
                badge={
                  <span
                    className="pointer-events-none absolute left-3 top-3 z-10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#faf9f7]"
                    style={{ background: "var(--olive)" }}
                  >
                    #{index + 1} Bestseller
                  </span>
                }
              />
              <Link href={href} className="block px-4 py-4">
                <h3 className="font-display line-clamp-1 text-lg font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[var(--sale)]">
                    Rs {finalPrice.toLocaleString()}
                  </span>
                  {hasDiscount && (
                    <span className="text-sm text-[var(--ink-soft)] line-through">
                      Rs {item.price.toLocaleString()}
                    </span>
                  )}
                </div>
                <span className="btn-primary mt-4 block w-full rounded-md py-2.5 text-center text-sm">
                  Shop now
                </span>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/products"
          className="btn-secondary rounded-md px-6 py-2.5 text-sm"
        >
          View all products
        </Link>
      </div>
    </section>
  );
};

export default TopSelling;
