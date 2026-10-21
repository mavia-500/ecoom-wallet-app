"use client";

import dynamic from "next/dynamic";
import { CartProvider } from "@/context/CartContext";

const CartDrawer = dynamic(() => import("@/components/CartDrawer"), {
  ssr: false,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
