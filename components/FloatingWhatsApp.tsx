"use client";

import { usePathname } from "next/navigation";

const PRODUCT_CATEGORIES = [
  "bifoldwallet",
  "trifoldwallet",
  "cardholder",
  "longwallet",
  "gifts",
];

function isProductDetail(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  return parts.length >= 2 && PRODUCT_CATEGORIES.includes(parts[0]);
}

export default function FloatingWhatsApp() {
  const pathname = usePathname() || "";
  const onProduct = isProductDetail(pathname);

  return (
    <a
      href="https://wa.me/923285478737?text=Hello%2C%20I%20am%20interested%20in%20Hilyah%20leather%20wallets"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed right-4 z-50 drop-shadow-lg transition-transform hover:scale-105 sm:bottom-6 ${
        onProduct
          ? "bottom-[11.5rem]"
          : "bottom-28"
      }`}
    >
      <svg viewBox="0 0 32 32" className="h-12 w-12" aria-hidden>
        <path
          fill="#25D366"
          d="M16 2C8.3 2 2 8.1 2 15.6c0 2.5.7 4.8 1.9 6.9L2 30l7.7-1.9c2 1.1 4.3 1.7 6.3 1.7 7.7 0 14-6.1 14-13.6S23.7 2 16 2z"
        />
        <path
          fill="#fff"
          d="M23.1 19.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.1c-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.7 2.5.8 3.4.7.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.5-.3z"
        />
      </svg>
    </a>
  );
}
