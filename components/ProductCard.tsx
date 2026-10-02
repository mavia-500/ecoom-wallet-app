"use client";

import Link from "next/link";
import { useState } from "react";
import CardImageCarousel from "@/components/CardImageCarousel";
import { useCart } from "@/context/CartContext";
import { productHref } from "@/lib/productSlug";

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
  const href = productHref(category, product);

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
          : { contentVisibility: "auto", containIntrinsicSize: "320px 420px" }
      }
    >
      <CardImageCarousel
        images={product.image}
        alt={`${product.title} —  ${product.color} leather product`}
        href={href}
        priority={priority}
        badge={
          hasDiscount ? (
            <span
              className="pointer-events-none absolute left-2 top-2 z-10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#faf9f7] sm:left-3 sm:top-3 sm:px-2 sm:py-1 sm:text-[11px]"
              style={{ background: "var(--olive)" }}
            >
              Sale
            </span>
          ) : undefined
        }
      />

      <Link href={href} className="group block">
        <div className="px-2.5 pt-2.5 sm:px-5 sm:pt-5">
          <h2 className="font-display line-clamp-1 text-sm font-semibold text-[var(--ink)] sm:text-xl">
            {product.title}
          </h2>
          <p className="mt-1 line-clamp-2 text-[11px] text-[var(--ink-soft)] sm:mt-2 sm:text-sm">
            {product.description}
          </p>
          <p className="mt-1.5 text-[10px] text-[var(--ink-soft)] sm:mt-3 sm:text-xs">
            Color: <span className="text-[var(--ink)]">{product.color}</span>
          </p>
          <div className="mt-1.5 flex items-baseline gap-1.5 sm:mt-3 sm:gap-2">
            <span className="text-sm font-bold text-[var(--sale)] sm:text-lg">
              Rs {finalPrice.toLocaleString()}
            </span>
            {hasDiscount && (
              <span className="text-[10px] text-[var(--ink-soft)] line-through sm:text-sm">
                Rs {product.price.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="mt-auto flex flex-col gap-1.5 p-2.5 pt-2 sm:gap-2 sm:p-5 sm:pt-3">
        <button
          type="button"
          onClick={handleAddToCart}
          className="btn-primary w-full rounded-md py-2 text-xs sm:py-2.5 sm:text-sm"
        >
          {added ? "Added ✓" : "Add to cart"}
        </button>
        <Link
          href={href}
          className="btn-secondary block w-full rounded-md py-2 text-center text-xs sm:py-2.5 sm:text-sm"
        >
          View details
        </Link>
      </div>
    </article>
  );
};
