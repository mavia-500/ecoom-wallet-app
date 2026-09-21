import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leather Wallet Gift Sets | Hilyah Pakistan",
  description:
    "Give a handcrafted leather wallet from Hilyah. Gift-ready sets with cash on delivery and lifetime leather warranty across Pakistan.",
  path: "/gifts",
  keywords: [
    "leather wallet gift Pakistan",
    "gift wallet for men",
    "Hilyah gifts",
    "wallet gift set",
  ],
});

export default function GiftsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
