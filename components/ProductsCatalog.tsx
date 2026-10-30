"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { ProductCard } from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  categoryLabel,
  type CatalogProduct,
} from "@/lib/searchClient";
import {
  PRODUCT_SORTS,
  type ProductSortId,
  sortCatalogProducts,
} from "@/lib/productFilters";

const categories = [
  { id: "all", label: "All" },
  { id: "sale", label: "Sale" },
  { id: "bifoldwallet", label: "Bi-Fold" },
  { id: "trifoldwallet", label: "Tri-Fold" },
  { id: "cardholder", label: "Card Holder" },
  { id: "longwallet", label: "Traveller Wallet" },
  { id: "gifts", label: "Gifts" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export default function ProductsCatalog({
  products,
}: {
  products: CatalogProduct[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlQuery = (searchParams.get("q") || "").trim();
  const [category, setCategory] = useState<CategoryId>("all");
  const [sort, setSort] = useState<ProductSortId>("featured");
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [visibleCount, setVisibleCount] = useState(12);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  const selectedCategory =
    categories.find((item) => item.id === category)?.label ?? "All";

  useEffect(() => {
    if (!categoryOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node)
      ) {
        setCategoryOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCategoryOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [categoryOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSearchQuery(urlQuery);
    setVisibleCount(12);
  }, [urlQuery]);

  const filtered = useMemo(() => {
    let list = products;

    if (category === "sale") {
      list = list.filter((p) => p.discountedPrice > 0);
    } else if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      const tokens = q.split(/\s+/).filter(Boolean);
      list = list.filter((p) => {
        const haystack = [
          p.title,
          p.color,
          p.category,
          categoryLabel(p.category),
          p.description,
        ]
          .join(" ")
          .toLowerCase();
        return tokens.every((t) => haystack.includes(t));
      });
    }

    return sortCatalogProducts(list, sort);
  }, [products, category, sort, searchQuery]);

  const visible = filtered.slice(0, visibleCount);
  const hasActiveFilters =
    category !== "all" || sort !== "featured" || searchQuery.trim().length > 0;

  const resetFilters = () => {
    setCategory("all");
    setSort("featured");
    setSearchQuery("");
    setVisibleCount(12);
    setCategoryOpen(false);
    if (urlQuery) router.replace("/products");
  };

  return (
    <div className="px-4 pb-12 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "All Products" },
          ]}
        />

        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cognac)]">
            Shop
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            {searchQuery.trim()
              ? `Results for “${searchQuery.trim()}”`
              : "All products"}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--ink-soft)]">
            Every Hilyah leather wallet in one place cash on delivery across
            Pakistan.
          </p>
        </div>

        <div className="mb-6 space-y-4">
          <div className="flex items-end gap-2 sm:flex-col sm:items-stretch sm:gap-4">
            <label className="flex min-w-0 flex-1 flex-col gap-1.5 sm:mx-0 sm:max-w-md">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                Search
              </span>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search…"
                className="w-full rounded-md border bg-[var(--surface)] px-3 py-2.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink-soft)] focus:border-[var(--cognac)]"
                style={{ borderColor: "var(--line)" }}
              />
            </label>

            <div
              ref={categoryRef}
              className="relative w-[40%] shrink-0 sm:w-full sm:max-w-xs"
            >
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
                Category
              </p>
              <button
                type="button"
                onClick={() => setCategoryOpen((open) => !open)}
                aria-expanded={categoryOpen}
                aria-haspopup="listbox"
                className="flex w-full items-center justify-between gap-1 rounded-md border bg-[var(--surface)] px-2.5 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--cognac)] sm:px-3"
                style={{ borderColor: "var(--line)" }}
              >
                <span className="truncate font-medium">{selectedCategory}</span>
                <FiChevronDown
                  className={`h-4 w-4 shrink-0 text-[var(--ink-soft)] transition-transform duration-200 ${
                    categoryOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
              {categoryOpen && (
                <ul
                  role="listbox"
                  aria-label="Product categories"
                  className="absolute right-0 z-20 mt-1.5 w-[min(100vw-2rem,16rem)] overflow-hidden rounded-md border bg-[var(--surface)] py-1 shadow-lg sm:left-0 sm:right-auto sm:w-full"
                  style={{ borderColor: "var(--line)" }}
                >
                  {categories.map((item) => {
                    const active = category === item.id;
                    return (
                      <li key={item.id} role="option" aria-selected={active}>
                        <button
                          type="button"
                          onClick={() => {
                            setCategory(item.id);
                            setVisibleCount(12);
                            setCategoryOpen(false);
                          }}
                          className={`flex w-full px-3 py-2.5 text-left text-sm transition-colors ${
                            active
                              ? "bg-[var(--leather)] font-medium text-[#faf9f7]"
                              : "text-[var(--ink)] hover:bg-[var(--bg-deep)]"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>

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
            <div className="grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((product, index) => (
                <ProductCard
                  key={`${product.category}-${product.id}`}
                  product={product}
                  category={product.category}
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
