import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Leather Wallets | Hilyah" },
  alternates: { canonical: absoluteUrl("/bifoldwallet") },
  robots: { index: false, follow: true },
};

export default function WalletsPage() {
  redirect("/bifoldwallet");
}
