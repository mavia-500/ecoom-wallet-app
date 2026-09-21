import Link from "next/link";
import Image from "next/image";

type TopItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  discountedPrice: number;
  category: string;
};

const topItems: TopItem[] = [
  {
    id: 14,
    title: "Wax Pull Up Leather Wallet",
    image: "/assets/bifold/IMG-20251124-WA0003_b82sgl.webp",
    price: 3400,
    discountedPrice: 200,
    category: "bifoldwallet",
  },
  {
    id: 2,
    title: "Pop up leather wallet",
    image: "/assets/bifold/poup1.webp",
    price: 2400,
    discountedPrice: 400,
    category: "bifoldwallet",
  },
  {
    id: 15,
    title: "Wax Pull Up Card Holder + Mini Wallet",
    image: "/assets/bifold/be6d3cbd-926e-42bd-83ed-e29497832a7a.webp",
    price: 2600,
    discountedPrice: 200,
    category: "cardholder",
  },
  {
    id: 1,
    title: "Leather Long Wallet",
    image: "/assets/longwallet/Gemini_Generated_Image_7pywpy7pywpy7pyw (1).webp",
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

          return (
            <Link
              key={`${item.category}-${item.id}`}
              href={`/${item.category}/${item.id}`}
              className="group block bg-[var(--surface)] transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--bg-deep)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className="absolute left-3 top-3 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#faf9f7]"
                  style={{ background: "var(--olive)" }}
                >
                  #{index + 1} Bestseller
                </span>
              </div>
              <div className="px-4 py-4">
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
              </div>
            </Link>
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
