"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import ImageSlider from "./ImageSlider";
import Breadcrumbs from "./Breadcrumbs";
import { useCart } from "@/context/CartContext";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface Review {
  id: number;
  username: string;
  comment: string;
  rating?: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  image: string[];
  color: string;
  price: number;
  discountedPrice: number;
  reviews: Review[];
}

interface WholeProductDetailProps {
  products: Product | null;
}

const categoryLabels: Record<string, string> = {
  bifoldwallet: "Bi-Fold",
  trifoldwallet: "Tri-Fold",
  cardholder: "Card Holder",
  longwallet: "Long Wallet",
  gifts: "Gifts",
};

const WholeProductDetail: React.FC<WholeProductDetailProps> = ({
  products,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [added, setAdded] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const reviewsPerPage = 6;
  const pathname = usePathname();
  const category = pathname?.split("/")[1] || "bifoldwallet";
  const categoryLabel = categoryLabels[category] || "Wallets";
  const { addItem } = useCart();

  useEffect(() => {
    if (!products || typeof window === "undefined" || !window.fbq) return;
    const finalPrice = products.price - products.discountedPrice;
    window.fbq("track", "ViewContent", {
      content_ids: [`${category}_${products.id}`],
      content_type: "product",
      content_name: products.title,
      value: finalPrice,
      currency: "PKR",
    });
  }, [products, category]);

  if (!products) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="font-display text-2xl font-semibold text-[var(--ink)]">
            Product not found
          </h1>
          <p className="mt-2 text-[var(--ink-soft)]">
            This item is currently unavailable.
          </p>
          <Link
            href="/"
            className="btn-primary mt-6 inline-block rounded-md px-5 py-2.5 text-sm"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const orderHref = `/placeorder?id=${products.id}&title=${encodeURIComponent(products.title)}&image=${encodeURIComponent(products.image[0])}&color=${encodeURIComponent(products.color)}&price=${products.price}&discountedPrice=${products.discountedPrice}`;
  const finalPrice = products.price - products.discountedPrice;
  const hasDiscount = products.discountedPrice > 0;
  const percent = hasDiscount
    ? Math.round((products.discountedPrice / products.price) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem({
      id: products.id,
      title: products.title,
      image: products.image[0],
      color: products.color,
      price: products.price,
      discountedPrice: products.discountedPrice,
      category,
    });
    setAdded(true);
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart", {
        content_ids: [`${category}_${products.id}`],
        content_type: "product",
        content_name: products.title,
        value: finalPrice,
        currency: "PKR",
      });
    }
    window.setTimeout(() => setAdded(false), 1800);
  };

  const displayReviews = products.reviews.slice(0, 12);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = displayReviews.slice(
    indexOfFirstReview,
    indexOfLastReview,
  );
  const totalPages = Math.max(
    1,
    Math.ceil(displayReviews.length / reviewsPerPage),
  );

  return (
    <div className="px-4 py-8 pb-28 sm:px-6 sm:pb-10 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "All Products", href: "/products" },
            { label: categoryLabel, href: `/${category}` },
            { label: products.title },
          ]}
        />

        <div
          className="overflow-hidden bg-[var(--surface)]"
          style={{ border: "1px solid var(--line)" }}
        >
          <ImageSlider images={products.image} productTitle={products.title} />

          <div className="p-5 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h1 className="font-display text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
                {products.title}
              </h1>
              {hasDiscount && (
                <span
                  className="rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide text-[#faf9f7]"
                  style={{ background: "var(--cognac)" }}
                >
                  {percent}% off
                </span>
              )}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
              {products.description}
            </p>

            <p className="mt-4 text-sm text-[var(--ink-soft)]">
              Color:{" "}
              <span className="font-medium text-[var(--ink)]">
                {products.color}
              </span>
            </p>

            <div className="mt-4 flex flex-wrap items-baseline gap-3">
              <span className="text-2xl font-bold text-[var(--sale)]">
                Rs {finalPrice.toLocaleString()}
              </span>
              {hasDiscount && (
                <span className="text-base text-[var(--ink-soft)] line-through">
                  Rs {products.price.toLocaleString()}
                </span>
              )}
            </div>

            <ul className="mt-5 grid gap-2 text-sm text-[var(--ink-soft)] sm:grid-cols-2">
              <li>✓ Genuine leather craftsmanship</li>
              <li>✓ Cash on delivery available</li>
              <li>✓ Fast nationwide delivery</li>
              <li>✓ Lifetime leather warranty</li>
            </ul>

            <div
              className="mt-6 rounded-md bg-[var(--bg)] p-4"
              style={{ border: "1px solid var(--line)" }}
            >
              <h2 className="text-sm font-semibold text-[var(--ink)]">
                How ordering works
              </h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[var(--ink-soft)]">
                <li>Add to cart (or order now)</li>
                <li>Enter your delivery details</li>
                <li>Pay cash when the parcel arrives</li>
              </ol>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                className="btn-secondary w-full flex-1 rounded-md py-3.5 text-center text-base"
              >
                {added ? "Added to cart ✓" : "Add to cart"}
              </button>
              <Link href={orderHref} className="w-full flex-1">
                <span className="btn-primary block w-full rounded-md py-3.5 text-center text-base">
                  Order now — COD
                </span>
              </Link>
            </div>

            {added && (
              <p className="mt-3 text-center text-sm text-[var(--olive)]">
                Added!{" "}
                <Link href="/cart" className="underline underline-offset-2">
                  View cart
                </Link>
              </p>
            )}

            <p className="mt-3 text-center text-xs text-[var(--ink-soft)]">
              Need help choosing?{" "}
              <a
                href={`https://wa.me/923285478737?text=${encodeURIComponent(`Hi, I have a question about ${products.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--cognac)] hover:underline"
              >
                WhatsApp us
              </a>
            </p>

            <div
              className="mt-10 border-t pt-8"
              style={{ borderColor: "var(--line)" }}
            >
              <button
                type="button"
                onClick={() => setReviewsOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-3 rounded-md bg-[var(--bg)] px-4 py-3.5 text-left transition-colors hover:bg-[var(--bg-deep)]"
                style={{ border: "1px solid var(--line)" }}
                aria-expanded={reviewsOpen}
                aria-controls="product-reviews"
              >
                <span>
                  <h2 className="font-display text-lg font-semibold text-[var(--ink)] sm:text-xl">
                    Customer reviews
                  </h2>
                  <span className="mt-0.5 block text-xs text-[var(--ink-soft)]">
                    {displayReviews.length}{" "}
                    {displayReviews.length === 1 ? "review" : "reviews"}
                  </span>
                </span>
                <FiChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[var(--ink-soft)] transition-transform duration-200 ${
                    reviewsOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>

              {reviewsOpen && (
                <div id="product-reviews" className="mt-4">
                  {currentReviews.length === 0 ? (
                    <p className="text-[var(--ink-soft)]">No reviews yet.</p>
                  ) : (
                    <ul className="space-y-4">
                      {currentReviews.map((review) => (
                        <li
                          key={review.id}
                          className="bg-[var(--bg)] p-4"
                          style={{ border: "1px solid var(--line)" }}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-medium text-[var(--ink)]">
                              {review.username}
                            </p>
                            {review.rating !== undefined && (
                              <div
                                className="flex"
                                aria-label={`${review.rating} out of 5 stars`}
                              >
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <span
                                    key={star}
                                    className={`text-sm ${
                                      review.rating && star <= review.rating
                                        ? "text-[var(--cognac)]"
                                        : "text-[var(--line)]"
                                    }`}
                                  >
                                    ★
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <p className="mt-2 text-sm text-[var(--ink-soft)]">
                            {review.comment}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {totalPages > 1 && (
                    <div className="mt-6 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentPage((p) => Math.max(1, p - 1))
                        }
                        disabled={currentPage === 1}
                        className={`rounded-md px-4 py-2.5 text-sm ${
                          currentPage === 1
                            ? "cursor-not-allowed bg-[var(--bg-deep)] text-[var(--ink-soft)]"
                            : "btn-primary"
                        }`}
                      >
                        Previous
                      </button>
                      <span className="text-xs text-[var(--ink-soft)]">
                        {currentPage} / {totalPages}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setCurrentPage((p) => Math.min(totalPages, p + 1))
                        }
                        disabled={currentPage === totalPages}
                        className={`rounded-md px-4 py-2.5 text-sm ${
                          currentPage === totalPages
                            ? "cursor-not-allowed bg-[var(--bg-deep)] text-[var(--ink-soft)]"
                            : "btn-primary"
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t bg-[var(--surface)] p-3 sm:hidden"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="mx-auto flex max-w-4xl items-center gap-2">
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs text-[var(--ink-soft)]">
              {products.title}
            </p>
            <p className="font-bold text-[var(--sale)]">
              Rs {finalPrice.toLocaleString()}
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="btn-secondary flex-shrink-0 rounded-md px-3 py-3 text-sm"
          >
            {added ? "Added ✓" : "Add"}
          </button>
          <Link
            href={orderHref}
            className="btn-primary flex-shrink-0 rounded-md px-4 py-3 text-sm"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WholeProductDetail;
