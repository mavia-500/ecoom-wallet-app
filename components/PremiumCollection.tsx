import Link from "next/link";
import CardImageCarousel from "@/components/CardImageCarousel";
import AddToCartButton from "@/components/AddToCartButton";
import { productHref } from "@/lib/productSlug";

type PremiumItem = {
  id: number;
  title: string;
  images: string[];
  color: string;
  price: number;
  discountedPrice: number;
  category: string;
};

/** Highest-priced pieces across the catalog. */
const premiumItems: PremiumItem[] = [
  {
    id: 16,
    title: "Vegetable Leather  Wallet",
    images: [
      "/assets/bifold/Gemini_Generated_Image_1e6qnh1e6qnh1e6q.webp",
      "/assets/bifold/Gemini_Generated_Image_v20n5ev20n5ev20n.webp",
      "/assets/bifold/4e2afded-fe05-4b77-9c2b-9e0558251f55.webp",
    ],
    color: "Choclate",
    price: 15000,
    discountedPrice: 1200,
    category: "bifoldwallet",
  },
  {
    id: 3,
    title: "Chocolate Leather Triple Gift Set",
    images: [
      "/assets/gifts/chocolate-gift-set-1.webp",
      "/assets/gifts/chocolate-gift-set-2.webp",
      "/assets/gifts/chocolate-gift-set-3.webp",
    ],
    color: "Chocolate Brown",
    price: 9999,
    discountedPrice: 0,
    category: "gifts",
  },
  {
    id: 9,
    title: "Chocolate Dual-Snap Traveler Long Wallet",
    images: [
      "/assets/longwallet/chocolate-dual-snap-long-wallet-1.webp",
      "/assets/longwallet/chocolate-dual-snap-long-wallet-3.webp",
      "/assets/longwallet/chocolate-dual-snap-long-wallet-2.webp",
    ],
    color: "Chocolate Brown",
    price: 8999,
    discountedPrice: 0,
    category: "longwallet",
  },
  {
    id: 6,
    title: "Ochre Snap Pocket Handcrafted Long Wallet",
    images: [
      "/assets/longwallet/ochre-snap-long-wallet-1.webp",
      "/assets/longwallet/ochre-snap-long-wallet-2.webp",
    ],
    color: "Ochre",
    price: 8000,
    discountedPrice: 0,
    category: "longwallet",
  },
];

function PremiumCard({
  item,
  priority = false,
}: {
  item: PremiumItem;
  priority?: boolean;
}) {
  const finalPrice = item.price - item.discountedPrice;
  const hasDiscount = item.discountedPrice > 0;
  const href = productHref(item.category, item);

  return (
    <div className="flex h-full flex-col bg-[var(--surface)] transition-shadow hover:shadow-md">
      <CardImageCarousel
        images={item.images}
        alt={`${item.title} premium leather wallet`}
        href={href}
        priority={priority}
        badge={
          <span
            className="pointer-events-none absolute left-2 top-2 z-10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#faf9f7] sm:left-3 sm:top-3 sm:px-2 sm:py-1 sm:text-[11px]"
            style={{ background: "var(--leather)" }}
          >
            Premium
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

const PremiumCollection = () => {
  return (
    <section
      id="premium"
      className="mx-auto max-w-7xl scroll-mt-24 px-3 pb-1.5 pt-3 sm:px-5 sm:pb-2 sm:pt-4 lg:px-8"
    >
      <div
        className="overflow-hidden"
        style={{ border: "1px solid var(--line)" }}
      >
        <div
          className="flex flex-col gap-1 px-3 py-3.5 sm:flex-row sm:items-end sm:justify-between sm:gap-3 sm:px-5 sm:py-4"
          style={{ background: "var(--leather)" }}
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e5c9a8] sm:text-xs">
              Finest craft
            </p>
            <h2 className="font-display mt-0.5 text-xl font-semibold text-[#faf9f7] sm:text-2xl">
              Premium collection
            </h2>
          </div>
          <p className="max-w-sm text-xs text-[#e5e1dc] sm:text-right sm:text-sm">
            Our most expensive handcrafted leather pieces, selected for finish
            and rarity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 bg-[var(--bg)] px-2 py-2.5 sm:gap-2.5 sm:px-3.5 sm:py-3.5 lg:grid-cols-4 lg:px-5">
          {premiumItems.map((item, index) => (
            <PremiumCard
              key={`${item.category}-${item.id}`}
              item={item}
              priority={index < 2}
            />
          ))}
        </div>

        <div className="flex justify-center bg-[var(--bg)] px-3 pb-3 pt-0.5">
          <Link
            href="/products"
            className="btn-secondary rounded-md px-4 py-1.5 text-sm"
          >
            Browse all products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PremiumCollection;
