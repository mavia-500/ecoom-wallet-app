import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sale | Leather Wallets on Discount | Hilyah Pakistan",
  description:
    "Shop all Hilyah leather wallets currently on sale — bifolds, card holders, long wallets, and gifts with cash on delivery across Pakistan.",
  path: "/sale",
  keywords: [
    "leather wallet sale Pakistan",
    "discount wallets Pakistan",
    "Hilyah sale",
    "wallet flash sale",
  ],
});

export default function SaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
