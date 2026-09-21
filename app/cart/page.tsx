"use client";

import Link from "next/link";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    totalItems,
    totalPrice,
    isReady,
  } = useCart();

  if (!isReady) {
    return (
      <div className="px-4 py-20 text-center text-[var(--ink-soft)]">
        Loading cart…
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-semibold text-[var(--ink)]">
          Your cart is empty
        </h1>
        <p className="mt-3 text-sm text-[var(--ink-soft)]">
          Browse our leather wallets and add your favorites.
        </p>
        <Link
          href="/bifoldwallet"
          className="btn-primary mt-8 inline-block rounded-md px-6 py-3 text-sm"
        >
          Shop wallets
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold text-[var(--ink)] sm:text-4xl">
            Shopping cart
          </h1>
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            {totalItems} item{totalItems === 1 ? "" : "s"}
          </p>
        </div>
        <Link
          href="/bifoldwallet"
          className="text-sm font-medium text-[var(--cognac)] hover:underline"
        >
          Continue shopping
        </Link>
      </div>

      <div className="space-y-4">
        {items.map((item) => {
          const unit = item.price - item.discountedPrice;
          const lineTotal = unit * item.quantity;

          return (
            <div
              key={`${item.category}-${item.id}`}
              className="flex flex-col gap-4 bg-[var(--surface)] p-4 sm:flex-row sm:items-center"
              style={{ border: "1px solid var(--line)" }}
            >
              <Link
                href={`/${item.category}/${item.id}`}
                className="h-28 w-28 flex-shrink-0 overflow-hidden bg-[var(--bg-deep)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </Link>

              <div className="min-w-0 flex-1">
                <Link
                  href={`/${item.category}/${item.id}`}
                  className="font-display text-lg font-semibold text-[var(--ink)] hover:text-[var(--cognac)]"
                >
                  {item.title}
                </Link>
                <p className="mt-1 text-sm text-[var(--ink-soft)]">
                  Color: {item.color}
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--sale)]">
                  Rs {unit.toLocaleString()}
                  {item.discountedPrice > 0 && (
                    <span className="ml-2 font-normal text-[var(--ink-soft)] line-through">
                      Rs {item.price.toLocaleString()}
                    </span>
                  )}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <div
                  className="flex items-center"
                  style={{ border: "1px solid var(--line)" }}
                >
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    className="px-3 py-2 text-[var(--ink)] hover:bg-[var(--bg-deep)]"
                    onClick={() =>
                      updateQuantity(item.id, item.category, item.quantity - 1)
                    }
                  >
                    <FiMinus className="h-4 w-4" />
                  </button>
                  <span className="min-w-8 text-center text-sm font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    className="px-3 py-2 text-[var(--ink)] hover:bg-[var(--bg-deep)]"
                    onClick={() =>
                      updateQuantity(item.id, item.category, item.quantity + 1)
                    }
                  >
                    <FiPlus className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <p className="font-semibold text-[var(--ink)]">
                    Rs {lineTotal.toLocaleString()}
                  </p>
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
            </div>
          );
        })}
      </div>

      <div
        className="mt-8 bg-[var(--surface)] p-5 sm:p-6"
        style={{ border: "1px solid var(--line)" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-[var(--ink-soft)]">Subtotal</span>
          <span className="text-xl font-bold text-[var(--sale)]">
            Rs {totalPrice.toLocaleString()}
          </span>
        </div>
        <p className="mt-2 text-xs text-[var(--ink-soft)]">
          Cash on delivery across Pakistan. Shipping confirmed after order.
        </p>
        <Link
          href="/placeorder?from=cart"
          className="btn-primary mt-5 block w-full rounded-md py-3.5 text-center text-sm sm:text-base"
        >
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
}
