"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiX } from "react-icons/fi";
import { productSlug } from "@/lib/productSlug";

type ToastProduct = {
  id: number;
  title: string;
  image: string;
  category: string;
};

type ToastPayload = {
  name: string;
  city: string;
  product: ToastProduct;
  minutesAgo: number;
};

const NAMES = [
  "Ahmed",
  "Hassan",
  "Ali",
  "Usman",
  "Bilal",
  "Hamza",
  "Omar",
  "Zain",
  "Fahad",
  "Imran",
  "Saad",
  "Tariq",
  "Ayesha",
  "Fatima",
  "Sara",
  "Hira",
  "Maham",
  "Noor",
  "Sana",
  "Rabia",
  "Geeti",
  "Kamran",
  "Noman",
  "Rehan",
];

const CITIES = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Sialkot",
  "Gujranwala",
  "Hyderabad",
  "Quetta",
  "Bahawalpur",
];

function pick<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)]!;
}

function buildToast(products: ToastProduct[]): ToastPayload | null {
  if (products.length === 0) return null;
  return {
    name: pick(NAMES),
    city: pick(CITIES),
    product: pick(products),
    minutesAgo: Math.floor(Math.random() * 461) + 40, // 40–500
  };
}

function timeLabel(minutes: number) {
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  if (hours === 1) return "1 hour ago";
  if (hours < 24) return `${hours} hours ago`;
  const days = Math.floor(hours / 24);
  return days === 1 ? "1 day ago" : `${days} days ago`;
}

export default function PurchaseNotification({
  products,
}: {
  products: ToastProduct[];
}) {
  const [toast, setToast] = useState<ToastPayload | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const showNext = useCallback(() => {
    const next = buildToast(products);
    if (!next) return;
    setToast(next);
    setVisible(true);
  }, [products]);

  useEffect(() => {
    if (dismissed || products.length === 0) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(setTimeout(resolve, ms));
      });

    const run = async () => {
      await wait(4000 + Math.floor(Math.random() * 4000));
      while (!cancelled) {
        if (cancelled) break;
        showNext();
        await wait(7000);
        if (cancelled) break;
        setVisible(false);
        await wait(12000 + Math.floor(Math.random() * 10000));
      }
    };

    void run();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [dismissed, products, showNext]);

  if (dismissed || !toast) return null;

  const href = `/${toast.product.category}/${productSlug(toast.product.title)}`;
  const title =
    toast.product.title.length > 36
      ? `${toast.product.title.slice(0, 36)}…`
      : toast.product.title;

  return (
    <div
      className={`fixed left-3 z-[45] w-[min(100%-1.5rem,22rem)] transition-all duration-500 sm:left-5 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      } bottom-28 sm:bottom-6`}
      role="status"
      aria-live="polite"
    >
      <div
        className="relative flex gap-3 rounded-lg bg-[var(--surface)] p-2.5 shadow-lg"
        style={{ border: "1px solid var(--line)" }}
      >
        <Link
          href={href}
          className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-[var(--bg-deep)]"
        >
          <Image
            src={toast.product.image}
            alt={toast.product.title}
            fill
            sizes="56px"
            className="object-cover"
          />
        </Link>

        <div className="min-w-0 flex-1 pr-5">
          <p className="truncate text-xs text-[var(--ink-soft)]">
            <span className="font-semibold text-[var(--ink)]">{toast.name}</span>{" "}
            ({toast.city}) purchased
          </p>
          <Link
            href={href}
            className="mt-0.5 block truncate text-sm font-semibold text-[var(--ink)] hover:text-[var(--cognac)]"
          >
            {title}
          </Link>
          <p className="mt-1 flex items-center gap-1.5 text-[11px] text-[var(--ink-soft)]">
            <span>{timeLabel(toast.minutesAgo)}</span>
            <span
              className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[var(--olive)] text-white"
              aria-hidden
            >
              <FiCheck className="h-2.5 w-2.5" strokeWidth={3} />
            </span>
            <span className="font-medium text-[var(--olive)]">Verified</span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setVisible(false);
            setDismissed(true);
          }}
          className="absolute right-1.5 top-1.5 rounded p-1 text-[var(--ink-soft)] hover:bg-[var(--bg-deep)] hover:text-[var(--ink)]"
          aria-label="Dismiss purchase notification"
        >
          <FiX className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
