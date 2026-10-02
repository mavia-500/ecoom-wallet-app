"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

/** Old /cart links open the side drawer on the previous page (or home). */
export default function CartPage() {
  const router = useRouter();
  const { openCart } = useCart();

  useEffect(() => {
    openCart();
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace("/");
    }
  }, [openCart, router]);

  return (
    <div className="px-4 py-20 text-center text-sm text-[var(--ink-soft)]">
      Opening cart…
    </div>
  );
}
