import HomePageContent from "@/components/HomePageContent";
import LcpPreload from "@/components/LcpPreload";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Hilyah | Genuine Leather Wallets for Men in Pakistan",
  },
  description:
    "Shop premium handcrafted leather wallets from Hilyah. Bifold, trifold, card holders & gifts with cash on delivery across Pakistan and a lifetime leather warranty.",
  alternates: { canonical: absoluteUrl("/") },
  robots: { index: false, follow: true },
};

export default function HomeAliasPage() {
  return (
    <>
      <LcpPreload href="/images/wem.webp" />
      <HomePageContent />
    </>
  );
}
