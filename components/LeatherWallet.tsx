import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  title: string;
  imageUrl: string;
  price: number;
  color: string;
  link: string;
}

const LeatherWallet = ({ productData }: { productData: Product[] }) => {
  return (
    <section
      className="mx-auto max-w-7xl px-4 pb-2 pt-2 sm:px-6 sm:pb-3 sm:pt-3 lg:px-8"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 560px" }}
    >
      <div className="mb-6 text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          Featured wallets
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-[var(--ink-soft)] sm:text-base">
          Everyday pieces from our latest leather collection priced fairly,
          shipped with cash on delivery.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:grid-cols-4">
        {productData.map(({ title, price, imageUrl, link }) => (
          <Link key={title} href={link} className="group block">
            <article className="overflow-hidden bg-[var(--surface)] transition-shadow duration-300 group-hover:shadow-md">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--bg-deep)] sm:aspect-[4/5]">
                <Image
                  src={imageUrl}
                  alt={`${title} featured leather collection`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  quality={70}
                />
              </div>
              <div className="px-2 py-2.5 text-center sm:px-4 sm:py-4">
                <h3 className="product-title text-[13px] font-semibold leading-snug text-[var(--ink)] sm:text-lg">
                  {title}
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-[var(--cognac)] sm:mt-1 sm:text-sm">
                  From Rs {price.toLocaleString()}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          href="/bifoldwallet"
          className="btn-primary rounded-md px-6 py-3 text-sm"
        >
          View all wallets
        </Link>
      </div>
    </section>
  );
};

export default LeatherWallet;
