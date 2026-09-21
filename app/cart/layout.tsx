import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cart",
  description: "Your Hilyah shopping cart.",
  robots: { index: false, follow: false },
  alternates: { canonical: absoluteUrl("/cart") },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
