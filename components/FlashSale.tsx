import Link from "next/link";
import CardImageCarousel from "@/components/CardImageCarousel";
import SaleCountdown from "@/components/SaleCountdown";
import AddToCartButton from "@/components/AddToCartButton";
import { productHref } from "@/lib/productSlug";

type SaleItem = {
  id: number;
  title: string;
  images: string[];
  color: string;
  price: number;
  discountedPrice: number;
  category: string;
};

const saleItems: SaleItem[] = [
  {
    id: 36,
    title: "Charcoal Snap Flap Card Holder",
    images: [
      "/assets/cardholder/charcoal-snap-cardholder-v2-1.webp",
      "/assets/cardholder/charcoal-snap-cardholder-v2-2.webp",
      "/assets/cardholder/charcoal-snap-cardholder-v2-3.webp",
      "/assets/cardholder/charcoal-snap-cardholder-v2-4.webp",
    ],
    color: "Charcoal",
    price: 4000,
    discountedPrice: 1800,
    category: "cardholder",
  },
  {
    id: 35,
    title: "Handmade Leather Money Clip Wallet",
    images: [
      "/assets/bifold/handmade-money-clip-wallet-v2-1.webp",
      "/assets/bifold/handmade-money-clip-wallet-v2-2.webp",
    ],
    color: "Mustard",
    price: 3800,
    discountedPrice: 1000,
    category: "bifoldwallet",
  },
  {
    id: 15,
    title: "Wax Pull Up Bi-Fold Mini Wallet",
    images: [
      "/assets/bifold/wax-pull-up-bi-fold-mini-v2-1.webp",
      "/assets/bifold/wax-pull-up-bi-fold-mini-v2-2.webp",
      "/assets/bifold/wax-pull-up-bi-fold-mini-v2-3.webp",
      "/assets/bifold/wax-pull-up-bi-fold-mini-v2-4.webp",
    ],
    color: "Brown",
    price: 2600,
    discountedPrice: 200,
    category: "bifoldwallet",
  },
  {
    id: 14,
    title: "Wax Pull Up Leather Wallet",
    images: [
      "/assets/bifold/wax-pull-up-leather-wallet-1.webp",
      "/assets/bifold/wax-pull-up-leather-wallet-2.webp",
      "/assets/bifold/wax-pull-up-leather-wallet-3.webp",
      "/assets/bifold/wax-pull-up-leather-wallet-4.webp",
    ],
    color: "Brown",
    price: 4500,
    discountedPrice: 1800,
    category: "bifoldwallet",
  },
];

function SaleCard({ item }: { item: SaleItem }) {
  const finalPrice = item.price - item.discountedPrice;
  const percent = Math.round((item.discountedPrice / item.price) * 100);
  const href = productHref(item.category, item);

  return (
    <div className="flex h-full flex-col bg-[var(--surface)] transition-shadow hover:shadow-md">
      <CardImageCarousel
        images={item.images}
        alt={`${item.title} ${item.color} leather wallet on sale`}
        href={href}
        badge={
          <span
            className="pointer-events-none absolute left-2 top-2 z-10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#faf9f7] sm:left-3 sm:top-3 sm:px-2 sm:py-1 sm:text-[11px]"
            style={{ background: "var(--cognac)" }}
          >
            -{percent}%
          </span>
        }
      />
      <div className="flex flex-1 flex-col px-2.5 pb-2.5 pt-2 sm:px-4 sm:pb-4 sm:pt-3">
        <Link href={href}>
          <h3 className="product-title line-clamp-2 text-[13px] font-semibold leading-snug text-[var(--ink)] sm:line-clamp-1 sm:text-lg">
            {item.title}
          </h3>
          <div className="mt-1 flex items-baseline gap-1.5 sm:mt-2 sm:gap-2">
            <span className="text-sm font-bold text-[var(--sale)] sm:text-lg">
              Rs {finalPrice.toLocaleString()}
            </span>
            <span className="text-[10px] text-[var(--ink-soft)] line-through sm:text-sm">
              Rs {item.price.toLocaleString()}
            </span>
          </div>
        </Link>
        <div className="mt-1.5 flex flex-col gap-1.5 sm:mt-2 sm:gap-2">
          <AddToCartButton
            item={{
              id: item.id,
              title: item.title,
              image: item.images[0],
              color: item.color,
              price: item.price,
              discountedPrice: item.discountedPrice,
              category: item.category,
            }}
          />
          <Link
            href={href}
            className="btn-secondary block w-full rounded-md py-2 text-center text-xs sm:py-2.5 sm:text-sm"
          >
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
}

const FlashSale = () => {
  return (
    <section
      className="mx-auto max-w-7xl px-3 pb-1.5 pt-1.5 sm:px-5 sm:pb-2 sm:pt-2 lg:px-8"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 620px" }}
    >
      <div className="overflow-hidden" style={{ background: "var(--leather)" }}>
        <div className="flex flex-col items-center gap-2 px-3 py-3 sm:flex-row sm:items-end sm:justify-between sm:gap-3 sm:px-5 sm:py-3.5">
          <div className="text-center sm:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--cognac)] sm:text-xs">
              Limited time
            </p>
            <h2 className="font-display mt-0.5 text-xl font-semibold text-[#faf9f7] sm:text-2xl">
              Flash sale
            </h2>
          </div>
          <SaleCountdown />
        </div>

        <div className="grid grid-cols-2 gap-2 bg-[var(--bg)] px-2 pb-1.5 sm:gap-2.5 sm:px-3.5 lg:grid-cols-4 lg:px-5 lg:pb-2">
          {saleItems.map((item) => (
            <SaleCard key={`${item.category}-${item.id}`} item={item} />
          ))}
        </div>

        <div className="flex justify-center bg-[var(--bg)] px-3 pb-2.5 pt-0.5">
          <Link
            href="/sale"
            className="btn-secondary rounded-md px-4 py-1.5 text-sm"
          >
            View all sale items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
