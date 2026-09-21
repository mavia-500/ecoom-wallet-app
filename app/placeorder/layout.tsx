import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Place order",
  description: "Complete your Hilyah leather wallet order with cash on delivery.",
  robots: { index: false, follow: false },
  alternates: { canonical: absoluteUrl("/placeorder") },
};

export default function PlaceOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
