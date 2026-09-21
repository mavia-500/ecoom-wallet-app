import React from "react";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer
      className="mt-8 py-14 text-[#e5e1dc]"
      style={{ background: "var(--leather)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold text-[#faf9f7]">
              Hilyah
            </h3>
            <p className="max-w-md text-sm leading-relaxed">
              Premium hand-stitched leather wallets crafted in Pakistan.
              Genuine materials, clear policies, and cash on delivery so you
              can shop with confidence.
            </p>
            <p className="text-sm">
              <a href="tel:+923285478737" className="underline-offset-2 hover:underline">
                +92 328 5478737
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-[#faf9f7]">
              Customer care
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:text-[#faf9f7]">
                  All products
                </Link>
              </li>
              <li>
                <Link href="/sale" className="hover:text-[#faf9f7]">
                  Sale
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
                  Long wallets
                </Link>
              </li>
              <li>
                <Link href="/gifts" className="hover:text-[#faf9f7]">
                  Gifts
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#faf9f7]">
                  Our story
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-[#faf9f7]">
                  Refund & exchange
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-[#faf9f7]">
                  Shipping policy
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-[#faf9f7]">
                  Privacy policy
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
            <h3 className="font-display text-xl font-semibold text-[#faf9f7]">
              Shop with confidence
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Cash on delivery (COD)</li>
              <li>Lifetime leather warranty</li>
              <li>7-day return window</li>
            </ul>
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
