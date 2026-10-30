"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FiMinus, FiPlus, FiTrash2, FiX } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import { productHref } from "@/lib/productSlug";
import { DELIVERY_CHARGE } from "@/lib/pricing";

export default function CartDrawer() {
  const {
    items,
    updateQuantity,
    removeItem,
    totalItems,
    totalPrice,
    isReady,
    isCartOpen,
    closeCart,
  } = useCart();

  useEffect(() => {
    if (!isCartOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isCartOpen]);

  useEffect(() => {
    if (!isCartOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[130]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close cart"
        onClick={closeCart}
      />

      <aside
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[var(--surface)] shadow-xl"
        style={{ borderLeft: "1px solid var(--line)" }}
      >
        <div
          className="flex items-center justify-between border-b px-4 py-4"
          style={{ borderColor: "var(--line)" }}
        >
          <div>
            <h2 className="font-display text-xl font-semibold text-[var(--ink)]">
              Your cart
            </h2>
            <p className="text-xs text-[var(--ink-soft)]">
              {isReady ? `${totalItems} item${totalItems === 1 ? "" : "s"}` : "Loading…"}
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--ink)] hover:bg-[var(--bg-deep)]"
            aria-label="Close cart"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
          {!isReady ? (
            <p className="text-sm text-[var(--ink-soft)]">Loading cart…</p>
          ) : items.length === 0 ? (
            <div className="py-10 text-center">
              <p className="font-display text-2xl font-semibold text-[var(--ink)]">
                Cart is empty
              </p>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Add a leather wallet to get started.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="btn-primary mt-6 inline-block rounded-md px-5 py-2.5 text-sm"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => {
                const unit = item.price - item.discountedPrice;
                const lineTotal = unit * item.quantity;

                return (
                  <li
                    key={`${item.category}-${item.id}`}
                    className="flex gap-3 bg-[var(--bg)] p-3"
                    style={{ border: "1px solid var(--line)" }}
                  >
                    <Link
                      href={productHref(item.category, item)}
                      onClick={closeCart}
                      className="h-20 w-20 flex-shrink-0 overflow-hidden bg-[var(--bg-deep)]"
                    >
                      <img
                        src={item.image}
                        alt={`${item.title} ${item.color} leather product`}
                        className="h-full w-full object-cover"
                      />
                    </Link>

                    <div className="min-w-0 flex-1">
                      <Link
                        href={productHref(item.category, item)}
                        onClick={closeCart}
                        className="font-display line-clamp-2 text-sm font-semibold text-[var(--ink)] hover:text-[var(--cognac)]"
                      >
                        {item.title}
                      </Link>
                      <p className="mt-0.5 text-xs text-[var(--ink-soft)]">
                        {item.color}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[var(--sale)]">
                        Rs {lineTotal.toLocaleString()}
                      </p>

                      <div className="mt-2 flex items-center justify-between gap-2">
                        <div
                          className="flex items-center bg-[var(--surface)]"
                          style={{ border: "1px solid var(--line)" }}
                        >
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="px-2.5 py-1.5 text-[var(--ink)] hover:bg-[var(--bg-deep)]"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.category,
                                item.quantity - 1,
                              )
                            }
                          >
                            <FiMinus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-7 text-center text-xs font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="px-2.5 py-1.5 text-[var(--ink)] hover:bg-[var(--bg-deep)]"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.category,
                                item.quantity + 1,
                              )
                            }
                          >
                            <FiPlus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label="Remove item"
                          className="rounded-md p-2 text-[var(--ink-soft)] hover:bg-[var(--bg-deep)] hover:text-[var(--cognac)]"
                          onClick={() => removeItem(item.id, item.category)}
                        >
                          <FiTrash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {isReady && items.length > 0 && (
          <div
            className="border-t px-4 py-4"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="space-y-1.5 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[var(--ink-soft)]">Subtotal</span>
                <span className="font-medium text-[var(--ink)]">
                  Rs {totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--ink-soft)]">Delivery</span>
                <span className="font-medium text-[var(--ink)]">
                  Rs {DELIVERY_CHARGE.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-semibold text-[var(--ink)]">Total</span>
                <span className="text-lg font-bold text-[var(--sale)]">
                  Rs {(totalPrice + DELIVERY_CHARGE).toLocaleString()}
                </span>
              </div>
            </div>
            <p className="mt-1 text-xs text-[var(--ink-soft)]">
              Cash on delivery across Pakistan. Delivery Rs {DELIVERY_CHARGE}.
            </p>
            <Link
              href="/placeorder?from=cart"
              onClick={closeCart}
              className="btn-primary mt-3 block w-full rounded-md py-3 text-center text-sm"
            >
              Proceed to checkout
            </Link>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-2 text-sm font-medium text-[var(--cognac)] hover:underline"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
