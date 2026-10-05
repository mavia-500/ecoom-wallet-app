"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPhone } from "react-icons/fi";
import SocialMediaLinks from "./SocialMediaLinks";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  const pathname = usePathname();
  if (pathname?.startsWith("/placeorder")) return null;

  return (
    <footer
      className="mt-2 py-10 text-[#e5e1dc] sm:py-12"
      style={{ background: "var(--leather)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold text-[#faf9f7]">
              Hilyah
            </h2>
            <p className="max-w-md text-sm leading-relaxed">
              Premium hand-stitched leather wallets crafted in Pakistan.
              Genuine materials, clear policies, and cash on delivery so you
              can shop with confidence.
            </p>
            <p className="text-sm">
              <a
                href="tel:+923285478737"
                className="inline-flex items-center gap-2 underline-offset-2 hover:underline"
              >
                <FiPhone className="h-4 w-4 shrink-0" aria-hidden />
                +92 328 5478737
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-[#faf9f7]">
              Customer care
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-[#faf9f7]">
                  All products
                </Link>
              </li>
              <li>
                <Link href="/bifoldwallet" className="hover:text-[#faf9f7]">
                  Bi-fold wallets
                </Link>
              </li>
              <li>
                <Link href="/trifoldwallet" className="hover:text-[#faf9f7]">
                  Tri-fold wallets
                </Link>
              </li>
              <li>
                <Link href="/cardholder" className="hover:text-[#faf9f7]">
                  Card holders
                </Link>
              </li>
              <li>
                <Link href="/longwallet" className="hover:text-[#faf9f7]">
                  Traveller wallets
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#faf9f7]">
                  Our story
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-[#faf9f7]">
                  Shipping policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#faf9f7]">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-[#faf9f7]">
                  Return &amp; exchange
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#faf9f7]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-xl font-semibold text-[#faf9f7]">
              Shop with confidence
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shipping" className="hover:text-[#faf9f7]">
                  Cash on delivery (COD)
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-[#faf9f7]">
                  Lifetime leather warranty
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-[#faf9f7]">
                  7-day return window
                </Link>
              </li>
            </ul>
            <div className="pt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SocialMediaLinks />
        </div>

        <div
          className="mt-8 flex justify-center border-t pt-8"
          style={{ borderColor: "rgba(250,249,247,0.15)" }}
        >
          <p className="text-sm text-[#c9c2b8]">
            © {new Date().getFullYear()} Hilyah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
