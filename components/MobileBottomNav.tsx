"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBook, FiCreditCard, FiLayers, FiMap } from "react-icons/fi";

const items = [
  {
    href: "/bifoldwallet",
    label: "Bifold",
    icon: FiBook,
  },
  {
    href: "/cardholder",
    label: "Card-Holder",
    icon: FiCreditCard,
  },
  {
    href: "/trifoldwallet",
    label: "Trifold",
    icon: FiLayers,
  },
  {
    href: "/longwallet",
    label: "Traveller Wallet",
    icon: FiMap,
  },
] as const;

const HIDDEN_PREFIXES = ["/placeorder", "/admin", "/signin", "/cart"];

export default function MobileBottomNav() {
  const pathname = usePathname() || "";

  if (HIDDEN_PREFIXES.some((p) => pathname.startsWith(p))) return null;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[120] flex justify-center px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2 lg:hidden"
      aria-label="Shop categories"
    >
      <ul className="flex w-full max-w-lg items-stretch justify-between gap-1 rounded-full bg-white px-2 py-2 shadow-[0_10px_32px_rgba(26,22,20,0.28)] ring-1 ring-black/10">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <li key={href} className="min-w-0 flex-1">
              <Link
                href={href}
                className={`flex min-h-[3.25rem] flex-col items-center justify-center gap-0.5 rounded-full px-1 py-1.5 text-center transition ${
                  active
                    ? "bg-[var(--bg-deep)] text-[var(--olive)]"
                    : "text-[var(--ink)]"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                <span className="max-w-[4.75rem] text-center text-[8px] font-bold uppercase leading-[1.1] tracking-wide">
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
