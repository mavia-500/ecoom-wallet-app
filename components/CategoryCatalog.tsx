"use client";

import React, { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  PRODUCT_SORTS,
  type ProductSortId,
  sortProducts,
} from "@/lib/productFilters";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string[];
  color: string;
  price: number;
  discountedPrice: number;
};

type OfferFilter = "all" | "sale";

export default function CategoryCatalog({
  title,
  description,
  category,
  products,
  eyebrow = "Collection",
}: {
  title: string;
  description: string;
  category: string;
  products: Product[];
  eyebrow?: string;
}) {
  const [offer, setOffer] = useState<OfferFilter>("all");
  const [sort, setSort] = useState<ProductSortId>("featured");
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = useMemo(() => {
    let list = products;
    if (offer === "sale") {
      list = list.filter((p) => p.discountedPrice > 0);
    }
    return sortProducts(list, sort, category);
  }, [products, offer, sort, category]);

  const visible = filtered.slice(0, visibleCount);
  const hasActiveFilters = offer !== "all" || sort !== "featured";
  const hasSaleItems = products.some((p) => p.discountedPrice > 0);

  const resetFilters = () => {
    setOffer("all");
    setSort("featured");
    setVisibleCount(12);
  };

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "All Products", href: "/products" },
            { label: title },
          ]}
        />

        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
            {eyebrow}
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--ink-soft)]">
            {description}
          </p>
        </div>

        <div className="mb-6 space-y-4">
          {hasSaleItems && (
            <div>
              <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)] sm:text-left">
                Offer
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {(
                  [
                    { id: "all", label: "All" },
                    { id: "sale", label: "Sale" },
                  ] as const
                ).map((item) => {
                  const active = offer === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setOffer(item.id);
                        setVisibleCount(12);
                      }}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        active
                          ? "bg-[var(--leather)] text-[#faf9f7]"
                          : "bg-[var(--bg-deep)] text-[var(--ink)] hover:text-[var(--cognac)]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-end sm:justify-between">
            <label className="flex w-full max-w-xs flex-col gap-1.5 text-left sm:w-auto">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                Sort by
              </span>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value as ProductSortId);
                  setVisibleCount(12);
                }}
                className="rounded-md border bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--cognac)]"
                style={{ borderColor: "var(--line)" }}
              >
                {PRODUCT_SORTS.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-sm font-medium text-[var(--cognac)] underline-offset-2 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        <p className="mb-5 text-center text-sm text-[var(--ink-soft)] sm:text-left">
          Showing {visible.length} of {filtered.length}{" "}
          {filtered.length === 1 ? "product" : "products"}
        </p>

        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm text-[var(--ink-soft)]">
              No products match these filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="btn-secondary mt-4 rounded-md px-5 py-2.5 text-sm"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  category={category}
                  priority={index === 0}
                />
              ))}
            </div>

            {visibleCount < filtered.length && (
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
