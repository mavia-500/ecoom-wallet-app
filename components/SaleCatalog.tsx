"use client";

import React, { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { CatalogProduct } from "@/lib/catalog";

export default function SaleCatalog({
  products,
}: {
  products: CatalogProduct[];
}) {
  const [visibleCount, setVisibleCount] = useState(12);
  const visible = products.slice(0, visibleCount);

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "All Products", href: "/products" },
            { label: "Sale" },
          ]}
        />

        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
            Limited time
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Sale
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--ink-soft)]">
            Every Hilyah leather piece currently on discount — cash on delivery
            across Pakistan.
          </p>
          <p className="mt-4 text-sm text-[var(--ink-soft)]">
            {products.length} {products.length === 1 ? "item" : "items"} on sale
          </p>
        </div>

        {products.length === 0 ? (
          <p className="py-16 text-center text-sm text-[var(--ink-soft)]">
            No sale items right now — check back soon.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((product, index) => (
                <ProductCard
                  key={`${product.category}-${product.id}`}
                  product={product}
                  category={product.category}
                  priority={index === 0}
                />
              ))}
            </div>

            {visibleCount < products.length && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="btn-secondary rounded-md px-6 py-3 text-sm"
                >
                  See more
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
