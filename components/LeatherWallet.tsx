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
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
          Featured wallets
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--ink-soft)] sm:text-base">
          Everyday pieces from our latest leather collection — priced fairly,
          shipped with cash on delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productData.map(({ title, price, imageUrl, link }) => (
          <Link key={title} href={link} className="group block">
            <article className="overflow-hidden bg-[var(--surface)] transition-shadow duration-300 group-hover:shadow-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--bg-deep)]">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-4 py-4 text-center">
                <h3 className="font-display text-lg font-semibold text-[var(--ink)]">
                  {title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[var(--cognac)]">
                  From Rs {price.toLocaleString()}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
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
