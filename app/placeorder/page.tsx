"use client";

import React, { useMemo, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  province: string;
  city: string;
  notes: string;
}

function PlaceOrderContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { items, totalPrice, clearCart, isReady } = useCart();
  const fromCart = searchParams.get("from") === "cart";

  const [placeOrder, setOrderPlace] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const singleItem = useMemo(() => {
    if (fromCart) return null;
    const id = searchParams.get("id");
    const title = searchParams.get("title");
    if (!id || !title) return null;
    return {
      id: Number(id),
      title,
      image: searchParams.get("image") || "",
      color: searchParams.get("color") || "",
      price: Number(searchParams.get("price") || 0),
      discountedPrice: Number(searchParams.get("discountedPrice") || 0),
      category: "direct",
      quantity: 1,
    };
  }, [fromCart, searchParams]);

  const orderItems = fromCart ? items : singleItem ? [singleItem] : [];
  const orderTotal = fromCart
    ? totalPrice
    : singleItem
      ? (singleItem.price - singleItem.discountedPrice) * singleItem.quantity
      : 0;

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    address: "",
    province: "",
    city: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (orderItems.length === 0) {
      setError("Your cart is empty. Please add products first.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/order", {
        formData,
        cartItems: orderItems,
      });
      if (res.status === 200) {
        const id = res.data.orderId as string;
        const lines = orderItems
          .map((item) => {
            const unit = item.price - item.discountedPrice;
            return `- ${item.title} (${item.color}) x${item.quantity} = Rs ${unit * item.quantity}`;
          })
          .join("\n");

        const waText = encodeURIComponent(
          `New Hilyah Order\nOrder ID: ${id}\nName: ${formData.fullName}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nProvince: ${formData.province}\nCity: ${formData.city}\nNotes: ${formData.notes || "—"}\n\nItems:\n${lines}\n\nTotal: Rs ${orderTotal}`,
        );

        setWhatsappUrl(`https://wa.me/923285478737?text=${waText}`);
        if (fromCart) clearCart();
        setOrderPlace(true);
        setError(null);
        setOrderId(id);
        setStatusMessage(res.data.message || "Order placed successfully!");
      } else {
        setError(res.data.message);
      }
    } catch (err: any) {
      console.error(err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    "w-full rounded-md border px-4 py-2.5 text-sm focus:outline-none focus:ring-2";
  const inputStyle = {
    borderColor: "var(--line)",
    background: "var(--surface)",
  } as const;

  if (!isReady) {
    return (
      <div className="py-20 text-center text-[var(--ink-soft)]">Loading…</div>
    );
  }

  if (!placeOrder && !loading && orderItems.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-semibold text-[var(--ink)]">
          Nothing to checkout
        </h1>
        <p className="mt-3 text-sm text-[var(--ink-soft)]">
          Add products to your cart, or choose Order now on a product page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/cart"
            className="btn-secondary rounded-md px-5 py-2.5 text-sm"
          >
            View cart
          </Link>
          <Link
            href="/bifoldwallet"
            className="btn-primary rounded-md px-5 py-2.5 text-sm"
          >
            Shop wallets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6">
      <div
        className="bg-[var(--surface)] p-6 sm:p-8"
        style={{ border: "1px solid var(--line)" }}
      >
        {placeOrder ? (
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--olive)]">
              Order confirmed
            </p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-[var(--ink)]">
              Thank you for choosing Hilyah
            </h2>
            <p className="mt-4 rounded-md bg-[var(--bg)] px-4 py-3 text-sm text-[var(--ink)]">
              Your order ID: <strong>{orderId}</strong>
              <br />
              <span className="text-[var(--ink-soft)]">
                Save this ID for your records.
              </span>
            </p>
            {statusMessage && (
              <p className="mt-3 text-sm text-[var(--ink-soft)]">
                {statusMessage}
              </p>
            )}
            <p className="mt-4 text-sm text-[var(--ink-soft)]">
              You will receive your order within 2–4 working days. Payment is
              collected on delivery.
            </p>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white"
              >
                <FaWhatsappSquare className="text-xl" />
                Also notify shop on WhatsApp
              </a>
            )}
            <div className="mt-4">
              <Link
                href="/"
                className="btn-primary inline-block rounded-md px-5 py-2.5 text-sm"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        ) : loading ? (
          <div className="flex flex-col items-center py-8 text-center">
            <svg
              className="mb-3 h-12 w-12 animate-spin text-[var(--cognac)]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <p className="font-medium text-[var(--ink)]">
              Confirming your order…
            </p>
          </div>
        ) : (
          <>
            <h1 className="font-display text-center text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
              Place your order
            </h1>
            <p className="mt-2 text-center text-sm text-[var(--ink-soft)]">
              Cash on delivery · Ships from Islamabad
            </p>

            <div className="mt-6 space-y-3">
              {orderItems.map((item) => {
                const unit = item.price - item.discountedPrice;
                return (
                  <div
                    key={`${item.category}-${item.id}`}
                    className="flex gap-3 bg-[var(--bg)] p-3"
                    style={{ border: "1px solid var(--line)" }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-[var(--ink)]">
                        {item.title}
                      </p>
                      <p className="text-xs text-[var(--ink-soft)]">
                        {item.color} · Qty {item.quantity}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[var(--sale)]">
                        Rs {(unit * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-between text-sm">
                <span className="text-[var(--ink-soft)]">Total</span>
                <span className="font-bold text-[var(--sale)]">
                  Rs {orderTotal.toLocaleString()}
                </span>
              </div>
              {fromCart && (
                <button
                  type="button"
                  onClick={() => router.push("/cart")}
                  className="text-xs font-medium text-[var(--cognac)] hover:underline"
                >
                  Edit cart
                </button>
              )}
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                  Full name <span className="text-[var(--cognac)]">*</span>
                </span>
                <input
                  type="text"
                  placeholder="e.g. Ahmed Khan"
                  className={inputClass}
                  style={inputStyle}
                  name="fullName"
                  autoComplete="name"
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                  Delivery address{" "}
                  <span className="text-[var(--cognac)]">*</span>
                </span>
                <input
                  type="text"
                  placeholder="House, street, area (مکمل پتہ)"
                  className={inputClass}
                  style={inputStyle}
                  required
                  name="address"
                  autoComplete="street-address"
                  onChange={handleChange}
                />
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                    Province <span className="text-[var(--cognac)]">*</span>
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Punjab"
                    className={inputClass}
                    style={inputStyle}
                    required
                    name="province"
                    onChange={handleChange}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                    City <span className="text-[var(--cognac)]">*</span>
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Lahore"
                    className={inputClass}
                    style={inputStyle}
                    required
                    name="city"
                    autoComplete="address-level2"
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                  Phone (WhatsApp preferred){" "}
                  <span className="text-[var(--cognac)]">*</span>
                </span>
                <input
                  type="tel"
                  placeholder="03XXXXXXXXX"
                  className={inputClass}
                  style={inputStyle}
                  required
                  name="phone"
                  autoComplete="tel"
                  inputMode="numeric"
                  pattern="[0-9+\-\s]{10,15}"
                  title="Enter a valid Pakistani phone number"
                  onChange={handleChange}
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-[var(--ink)]">
                  Notes (optional)
                </span>
                <textarea
                  placeholder="Landmark, preferred delivery time, etc."
                  className={inputClass}
                  style={inputStyle}
                  name="notes"
                  onChange={handleChange}
                  rows={3}
                />
              </label>

              <p className="rounded-md bg-[var(--bg)] px-3 py-2 text-xs text-[var(--ink-soft)]">
                You pay cash when the courier delivers. No online payment
                needed.
              </p>

              <button
                type="submit"
                disabled={
                  loading ||
                  !formData.fullName ||
                  !formData.address ||
                  !formData.province ||
                  !formData.city ||
                  !formData.phone
                }
                className={`w-full rounded-md py-3.5 text-sm font-semibold transition ${
                  loading ||
                  !formData.fullName ||
                  !formData.address ||
                  !formData.province ||
                  !formData.city ||
                  !formData.phone
                    ? "cursor-not-allowed bg-[var(--bg-deep)] text-[var(--ink-soft)]"
                    : "btn-primary"
                }`}
              >
                Confirm order (COD) — Rs {orderTotal.toLocaleString()}
              </button>
            </form>
          </>
        )}

        {error && (
          <div
            className="mt-6 flex items-start gap-3 bg-[var(--bg)] p-4"
            style={{ border: "1px solid var(--line)" }}
          >
            <p className="flex-1 text-sm text-[var(--ink)]">{error}</p>
            <a
              href="https://wa.me/923285478737?text=Hello%2C%20I%20need%20help%20with%20my%20Hilyah%20order"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp support"
            >
              <FaWhatsappSquare className="text-4xl text-[#25D366]" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PlaceOrderPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-[var(--ink-soft)]">Loading…</div>
      }
    >
      <PlaceOrderContent />
    </Suspense>
  );
}
