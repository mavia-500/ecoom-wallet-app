import Link from "next/link";
import CardImageCarousel from "@/components/CardImageCarousel";
import AddToCartButton from "@/components/AddToCartButton";
import { productHref } from "@/lib/productSlug";

type TopItem = {
  id: number;
  title: string;
  images: string[];
  color: string;
  price: number;
  discountedPrice: number;
  category: string;
};

const topItems: TopItem[] = [
  {
    id: 33,
    title: "Honey Tan Slim Minimalist Bifold",
    images: [
      "/assets/bifold/honey-tan-slim-bifold-v2-1.webp",
      "/assets/bifold/honey-tan-slim-bifold-v2-2.webp",
      "/assets/bifold/honey-tan-slim-bifold-v2-3.webp",
      "/assets/bifold/honey-tan-slim-bifold-v2-4.webp",
    ],
    color: "Honey Tan",
    price: 3199,
    discountedPrice: 0,
    category: "bifoldwallet",
  },
  {
    id: 34,
    title: "Cognac Circle-Inlay Gold-Stitch Bifold",
    images: [
      "/assets/bifold/cognac-circle-bifold-1.webp",
      "/assets/bifold/cognac-circle-bifold-2.webp",
      "/assets/bifold/cognac-circle-bifold-3.webp",
      "/assets/bifold/cognac-circle-bifold-4.webp",
      "/assets/bifold/cognac-circle-bifold-5v2.webp",
    ],
    color: "Cognac",
    price: 3399,
    discountedPrice: 0,
    category: "bifoldwallet",
  },
  {
    id: 31,
    title: "Burgundy Wave-Slot Red-Stitch Card Holder",
    images: [
      "/assets/cardholder/burgundy-wave-cardholder-v2-1.webp",
      "/assets/cardholder/burgundy-wave-cardholder-v2-2.webp",
      "/assets/cardholder/burgundy-wave-cardholder-v2-3.webp",
      "/assets/cardholder/burgundy-wave-cardholder-v2-4.webp",
    ],
    color: "Burgundy",
    price: 2999,
    discountedPrice: 0,
    category: "cardholder",
  },
  {
    id: 36,
    title: "Cognac Voyager: Leather Passport Wallet",
    images: [
      "/assets/bifold/cognac-voyager-passport-1.webp",
      "/assets/bifold/cognac-voyager-passport-2.webp",
      "/assets/bifold/cognac-voyager-passport-3.webp",
      "/assets/bifold/cognac-voyager-passport-4.webp",
      "/assets/bifold/cognac-voyager-passport-5.webp",
    ],
    color: "Cognac",
    price: 6500,
    discountedPrice: 0,
    category: "bifoldwallet",
  },
];

function TopSellingCard({
  item,
  index,
}: {
  item: TopItem;
  index: number;
}) {
  const finalPrice = item.price - item.discountedPrice;
  const hasDiscount = item.discountedPrice > 0;
  const href = productHref(item.category, item);

  return (
    <div className="flex h-full flex-col bg-[var(--surface)] transition-shadow hover:shadow-md">
      <CardImageCarousel
        images={item.images}
        alt={`${item.title} ${item.color} bestselling leather wallet`}
        href={href}
        badge={
          <span
            className="pointer-events-none absolute left-2 top-2 z-10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#faf9f7] sm:left-3 sm:top-3 sm:px-2 sm:py-1 sm:text-[11px]"
            style={{ background: "var(--olive)" }}
          >
            #{index + 1} Bestseller
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
            {hasDiscount && (
              <span className="text-[10px] text-[var(--ink-soft)] line-through sm:text-sm">
                Rs {item.price.toLocaleString()}
              </span>
            )}
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

const TopSelling = () => {
  return (
    <section
      id="top-selling"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-2 pt-2 sm:px-6 sm:pb-3 sm:pt-3 lg:px-8"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 640px" }}
    >
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
          Customer favorites
        </p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          Top selling
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-[var(--ink-soft)] sm:text-base">
          Our most-loved leather wallets the pieces customers reorder and gift
          most often.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-4">
        {topItems.map((item, index) => (
          <TopSellingCard
            key={`${item.category}-${item.id}`}
            item={item}
            index={index}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
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
