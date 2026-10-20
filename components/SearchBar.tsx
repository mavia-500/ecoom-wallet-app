"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import {
  categoryLabel,
  getSearchIndex,
  searchProducts,
  type SearchProduct,
} from "@/lib/catalog";
import { productHref } from "@/lib/productSlug";

const SEARCH_INDEX = getSearchIndex();

type SearchBarProps = {
  /** Compact icon trigger (navbar) or full-width field (mobile menu). */
  variant?: "icon" | "inline";
  onNavigate?: () => void;
  className?: string;
};

export default function SearchBar({
  variant = "icon",
  onNavigate,
  className = "",
}: SearchBarProps) {
  const router = useRouter();
  const inputId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(
    () => searchProducts(SEARCH_INDEX, query, 8),
    [query]
  );

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  useEffect(() => {
    if (!open || variant === "inline") return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, variant]);

  const handleSelect = () => {
    close();
    onNavigate?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    if (results.length === 1) {
      handleSelect();
      router.push(productHref(results[0].category, results[0]));
      return;
    }

    handleSelect();
    router.push(`/products?q=${encodeURIComponent(q)}`);
  };

  if (variant === "inline") {
    return (
      <div ref={rootRef} className={`w-full ${className}`}>
        <form onSubmit={handleSubmit} className="relative w-full">
          <label htmlFor={inputId} className="sr-only">
            Search products
          </label>
          <FiSearch
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--ink-soft)]"
            aria-hidden
          />
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            autoComplete="off"
            className="w-full rounded-md border bg-[var(--bg-deep)] py-3 pl-11 pr-11 text-base text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--cognac)]"
            style={{ borderColor: "var(--line)" }}
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-[var(--ink-soft)] hover:bg-[var(--surface)]"
              aria-label="Clear search"
            >
              <FiX className="h-5 w-5" />
            </button>
          ) : null}
        </form>

        {query.trim() ? (
          <div
            className="mt-3 max-h-[50vh] overflow-y-auto rounded-md border bg-[var(--surface)]"
            style={{ borderColor: "var(--line)" }}
            role="listbox"
            aria-label="Search results"
          >
            <ResultsBody
              query={query}
              results={results}
              onSelect={handleSelect}
            />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div ref={rootRef} className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--ink)] hover:bg-[var(--bg-deep)]"
        aria-label="Search products"
        aria-expanded={open}
      >
        <FiSearch className="h-6 w-6" />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[110] flex flex-col bg-[var(--surface)]"
          role="dialog"
          aria-modal="true"
          aria-label="Search products"
        >
          <div
            className="flex flex-none items-center gap-2 border-b px-3 py-3 sm:px-4"
            style={{ borderColor: "var(--line)" }}
          >
            <form onSubmit={handleSubmit} className="relative min-w-0 flex-1">
              <label htmlFor={inputId} className="sr-only">
                Search products
              </label>
              <FiSearch
                className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--ink-soft)]"
                aria-hidden
              />
              <input
                ref={inputRef}
                id={inputId}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                autoComplete="off"
                className="w-full rounded-md border bg-[var(--bg-deep)] py-3 pl-11 pr-3 text-base text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--cognac)]"
                style={{ borderColor: "var(--line)" }}
              />
            </form>
            <button
              type="button"
              onClick={close}
              className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-md text-[var(--ink)] hover:bg-[var(--bg-deep)]"
              aria-label="Close search"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain">
            {!query.trim() ? (
              <p className="px-4 py-10 text-center text-sm text-[var(--ink-soft)]">
                Search wallets, colors, or categories
              </p>
            ) : (
              <ResultsBody
                query={query}
                results={results}
                onSelect={handleSelect}
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ResultsBody({
  query,
  results,
  onSelect,
}: {
  query: string;
  results: SearchProduct[];
  onSelect: () => void;
}) {
  const q = query.trim();

  if (results.length === 0) {
    return (
      <p className="px-4 py-10 text-center text-sm text-[var(--ink-soft)]">
        No products match &ldquo;{q}&rdquo;
      </p>
    );
  }

  return (
    <>
      <ul className="py-1">
        {results.map((product) => (
          <ResultRow
            key={`${product.category}-${product.id}`}
            product={product}
            onSelect={onSelect}
          />
        ))}
      </ul>
      <Link
        href={`/products?q=${encodeURIComponent(q)}`}
        onClick={onSelect}
        className="block border-t px-4 py-3.5 text-center text-sm font-bold text-[var(--cognac)] hover:bg-[var(--bg-deep)]"
        style={{ borderColor: "var(--line)" }}
      >
        View all matching products
      </Link>
    </>
  );
}

function ResultRow({
  product,
  onSelect,
}: {
  product: SearchProduct;
  onSelect: () => void;
}) {
  const finalPrice = product.price - product.discountedPrice;
  const href = productHref(product.category, product);

  return (
    <li>
      <Link
        href={href}
        onClick={onSelect}
        className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-deep)]"
      >
        <img
          src={product.image}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 flex-none rounded object-cover"
          loading="lazy"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-[var(--ink)]">
            {product.title}
          </p>
          <p className="truncate text-xs text-[var(--ink-soft)]">
            {categoryLabel(product.category)}
            {product.color ? ` · ${product.color}` : ""}
          </p>
        </div>
        <p className="flex-none text-sm font-bold text-[var(--cognac)]">
          Rs {finalPrice.toLocaleString()}
        </p>
      </Link>
    </li>
  );
}
