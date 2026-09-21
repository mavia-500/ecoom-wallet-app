import Link from "next/link";
import Image from "next/image";
import SaleCountdown from "@/components/SaleCountdown";

type SaleItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  discountedPrice: number;
  category: string;
};

const saleItems: SaleItem[] = [
  {
    id: 2,
    title: "Pop up leather wallet",
    image: "/assets/bifold/poup1.webp",
    price: 2400,
    discountedPrice: 400,
    category: "bifoldwallet",
  },
  {
    id: 3,
    title: "Vintage book Wallet",
    image: "/assets/bifold/p2.webp",
    price: 1800,
    discountedPrice: 300,
    category: "bifoldwallet",
  },
  {
    id: 14,
    title: "Wax Pull Up Leather Wallet",
    image: "/assets/bifold/IMG-20251124-WA0003_b82sgl.webp",
    price: 3400,
    discountedPrice: 200,
    category: "bifoldwallet",
  },
  {
    id: 1,
    title: "Premium Leather Wallet",
    image: "/assets/bifold/ssw.webp",
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
                    style={{ background: "var(--cognac)" }}
                  >
                    -{percent}%
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
                    <span className="text-sm text-[var(--ink-soft)] line-through">
                      Rs {item.price.toLocaleString()}
                    </span>
                  </div>
                  <span className="btn-primary mt-4 block w-full rounded-md py-2.5 text-center text-sm">
                    Grab deal
                  </span>
                </div>
              </Link>
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
