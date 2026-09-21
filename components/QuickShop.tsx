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

const QuickShop = () => {
  return (
    <section className="border-b" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
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
