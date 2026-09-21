"use client";

import Link from "next/link";
import { useState } from "react";
import CardImageCarousel from "@/components/CardImageCarousel";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string[];
  color: string;
  price: number;
  discountedPrice: number;
}

interface ProductCardProps {
  product: Product;
  category: string;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  category,
  priority = false,
}) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const finalPrice = product.price - product.discountedPrice;
  const hasDiscount = product.discountedPrice > 0;
  const href = `/${category}/${product.id}`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      title: product.title,
      image: product.image[0],
      color: product.color,
      price: product.price,
      discountedPrice: product.discountedPrice,
      category,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article
      className="flex h-full flex-col overflow-hidden bg-[var(--surface)] transition-shadow duration-300 hover:shadow-md"
      style={
        priority
          ? undefined
          : { contentVisibility: "auto", containIntrinsicSize: "400px 520px" }
      }
    >
      <CardImageCarousel
        images={product.image}
        alt={product.title}
        href={href}
        badge={
          hasDiscount ? (
            <span
              className="pointer-events-none absolute left-3 top-3 z-10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#faf9f7]"
              style={{ background: "var(--olive)" }}
            >
              Sale
            </span>
          ) : undefined
        }
      />

      <Link href={href} className="group block">
        <div className="px-4 pt-4 sm:px-5 sm:pt-5">
          <h2 className="font-display line-clamp-1 text-lg font-semibold text-[var(--ink)] sm:text-xl">
            {product.title}
          </h2>
          <p className="mt-2 line-clamp-2 text-sm text-[var(--ink-soft)]">
            {product.description}
          </p>
          <p className="mt-3 text-xs text-[var(--ink-soft)]">
            Color: <span className="text-[var(--ink)]">{product.color}</span>
          </p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-lg font-bold text-[var(--sale)]">
              Rs {finalPrice.toLocaleString()}
            </span>
            {hasDiscount && (
              <span className="text-sm text-[var(--ink-soft)] line-through">
                Rs {product.price.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="mt-auto flex flex-col gap-2 p-4 pt-3 sm:p-5 sm:pt-3">
        <button
          type="button"
          onClick={handleAddToCart}
          className="btn-primary w-full rounded-md py-2.5 text-sm"
        >
          {added ? "Added ✓" : "Add to cart"}
        </button>
        <Link
          href={href}
          className="btn-secondary block w-full rounded-md py-2.5 text-center text-sm"
        >
          View details
        </Link>
      </div>
    </article>
  );
};
