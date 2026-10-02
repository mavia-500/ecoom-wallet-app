import Link from "next/link";
import React from "react";

const categories = [
  { href: "/sale", label: "Sale", hint: "On discount" },
  { href: "/bifoldwallet", label: "Bi-Fold", hint: "Everyday" },
  { href: "/trifoldwallet", label: "Tri-Fold", hint: "More space" },
  { href: "/cardholder", label: "Card Holder", hint: "Slim" },
  { href: "/longwallet", label: "Long Wallet", hint: "Cash & cards" },
  { href: "/gifts", label: "Gifts", hint: "For him" },
];

const QuickShop = ({ overlay = false }: { overlay?: boolean }) => {
  if (overlay) {
    return (
      <div className="w-full">
        <p className="mb-1 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e5e1dc] sm:mb-1.5 sm:text-left sm:text-xs">
          Quick shop
        </p>
        <div className="grid w-full grid-cols-3 gap-1 sm:grid-cols-6 sm:gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="min-w-0 rounded-md bg-[var(--surface)]/95 px-1 py-1.5 text-center shadow-sm backdrop-blur-sm transition hover:bg-[#faf9f7] sm:px-2.5 sm:py-2.5"
              style={{ border: "1px solid rgba(250,249,247,0.35)" }}
            >
              <span className="block text-[10px] font-semibold leading-tight text-[var(--ink)] sm:text-xs">
                {cat.label}
              </span>
              <span className="mt-0.5 block text-[8px] leading-tight text-[var(--ink-soft)] sm:text-[10px]">
                {cat.hint}
              </span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section
      className="border-b"
      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-soft)] sm:text-left">
          Quick shop
        </p>
        <div className="-mx-1 flex gap-2 overflow-x-auto pb-1 sm:mx-0 sm:grid sm:grid-cols-6 sm:overflow-visible">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="min-w-[7.5rem] flex-shrink-0 rounded-md px-3 py-3 text-center transition hover:bg-[var(--bg-deep)] sm:min-w-0"
              style={{ border: "1px solid var(--line)" }}
            >
              <span className="block text-sm font-semibold text-[var(--ink)]">
                {cat.label}
              </span>
              <span className="mt-0.5 block text-xs text-[var(--ink-soft)]">
                {cat.hint}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickShop;
