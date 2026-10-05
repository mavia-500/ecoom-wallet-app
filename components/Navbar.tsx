"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/bifoldwallet", label: "Bi-Fold" },
  { href: "/cardholder", label: "Card Holder" },
  { href: "/trifoldwallet", label: "Tri-Fold" },
  { href: "/longwallet", label: "Traveller Wallet" },
  { href: "/gifts", label: "Gifts" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "All Products" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, isReady, openCart } = useCart();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "/home";
    return pathname.startsWith(href);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          background: "var(--surface)",
          borderColor: "var(--line)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between overflow-hidden sm:h-16">
            <Link
              href="/"
              className="flex h-full flex-shrink-0 items-center overflow-hidden"
              aria-label="Hilyah home"
            >
              <img
                src="/images/logo1.webp"
                alt="Hilyah genuine leather wallets"
                width={160}
                height={56}
                decoding="async"
                fetchPriority="high"
                className="h-11 w-auto object-contain object-center sm:h-12"
              />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-[15px] font-bold transition-colors ${
                    isActive(link.href)
                      ? "bg-[var(--bg-deep)] text-[var(--cognac)]"
                      : "text-[var(--ink)] hover:bg-[var(--bg-deep)] hover:text-[var(--cognac)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={openCart}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--ink)] hover:bg-[var(--bg-deep)]"
                aria-label="Shopping cart"
              >
                <FiShoppingCart className="h-6 w-6" />
                {isReady && totalItems > 0 && (
                  <span
                    className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-[#faf9f7]"
                    style={{ background: "var(--cognac)" }}
                  >
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--ink)] hover:bg-[var(--bg-deep)] lg:hidden"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                aria-expanded={isOpen}
              >
                <FiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-[var(--surface)] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div
            className="flex h-14 flex-none items-center justify-between border-b px-4"
            style={{ borderColor: "var(--line)" }}
          >
            <img
              src="/images/logo1.webp"
              alt="Hilyah genuine leather wallets"
              className="h-11 w-auto object-contain object-center"
            />
            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--ink)] hover:bg-[var(--bg-deep)]"
              aria-label="Close menu"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          <div
            className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-3"
            style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
          >
            <div className="flex flex-col gap-1 pb-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-md px-3 py-3 text-base font-bold ${
                    isActive(link.href)
                      ? "bg-[var(--bg-deep)] text-[var(--cognac)]"
                      : "text-[var(--ink)] hover:bg-[var(--bg-deep)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  openCart();
                }}
                className="rounded-md px-3 py-3 text-left text-base font-bold text-[var(--ink)] hover:bg-[var(--bg-deep)]"
              >
                Cart{isReady && totalItems > 0 ? ` (${totalItems})` : ""}
              </button>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-base font-bold text-[var(--ink)] hover:bg-[var(--bg-deep)]"
              >
                Contact & WhatsApp
              </Link>
              <a
                href="tel:+923285478737"
                className="rounded-md px-3 py-3 text-base font-bold text-[var(--cognac)]"
              >
                Call +92 328 5478737
              </a>
              <Link
                href="/shipping"
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-base font-bold text-[var(--ink)] hover:bg-[var(--bg-deep)]"
              >
                Shipping policy
              </Link>
              <Link
                href="/privacy"
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-base font-bold text-[var(--ink)] hover:bg-[var(--bg-deep)]"
              >
                Privacy policy
              </Link>
              <Link
                href="/policy"
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-base font-bold text-[var(--ink)] hover:bg-[var(--bg-deep)]"
              >
                Return &amp; exchange
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
