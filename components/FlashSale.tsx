"use client";

import Link from "next/link";
import CardImageCarousel from "@/components/CardImageCarousel";
import SaleCountdown from "@/components/SaleCountdown";
import { productHref } from "@/lib/productSlug";

type SaleItem = {
  id: number;
  title: string;
  images: string[];
  price: number;
  discountedPrice: number;
  category: string;
};

const saleItems: SaleItem[] = [
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
    id: 3,
    title: "Vintage book Wallet",
    images: [
      "/assets/bifold/p2.webp",
      "/assets/bifold/p2_09a8dc7a-ca8e-4820-8dec-6957cfe25c03.webp",
    ],
    price: 1800,
    discountedPrice: 300,
    category: "bifoldwallet",
  },
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
    id: 1,
    title: "Premium Leather Wallet",
    images: ["/assets/bifold/ssw.webp", "/assets/bifold/ss.webp"],
    price: 2000,
    discountedPrice: 200,
    category: "bifoldwallet",
  },
];

const FlashSale = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden" style={{ background: "var(--leather)" }}>
        <div className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cognac)]">
              Limited time
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-[#faf9f7] sm:text-4xl">
              Flash sale
            </h2>
            <p className="mt-2 max-w-md text-sm text-[#e5e1dc]">
              Handpicked leather wallets at special prices today — cash on
              delivery across Pakistan.
            </p>
          </div>
          <SaleCountdown />
        </div>

        <div className="grid grid-cols-1 gap-4 bg-[var(--bg)] px-4 pb-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:pb-8">
          {saleItems.map((item) => {
            const finalPrice = item.price - item.discountedPrice;
            const percent = Math.round(
              (item.discountedPrice / item.price) * 100,
            );
            const href = productHref(item.category, item);

            return (
              <div
                key={`${item.category}-${item.id}`}
                className="bg-[var(--surface)] transition-shadow hover:shadow-md"
              >
                <CardImageCarousel
                  images={item.images}
                  alt={`${item.title} —  leather wallet on sale`}
                  href={href}
                  badge={
                    <span
                      className="pointer-events-none absolute left-3 top-3 z-10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#faf9f7]"
                      style={{ background: "var(--cognac)" }}
                    >
                      -{percent}%
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
                    <span className="text-sm text-[var(--ink-soft)] line-through">
                      Rs {item.price.toLocaleString()}
                    </span>
                  </div>
                  <span className="btn-primary mt-4 block w-full rounded-md py-2.5 text-center text-sm">
                    Grab deal
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center bg-[var(--bg)] px-4 pb-8">
          <Link
            href="/sale"
            className="btn-secondary rounded-md px-6 py-2.5 text-sm"
          >
            View all sale items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
