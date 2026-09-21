import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "All Leather Wallets & Products | Hilyah Pakistan",
  description:
    "Browse all Hilyah genuine leather wallets — bi-fold, tri-fold, card holders, long wallets, and gifts. Cash on delivery across Pakistan.",
  path: "/products",
  keywords: [
    "all leather wallets Pakistan",
    "Hilyah products",
    "buy wallets online Pakistan",
    "leather wallet shop",
  ],
});

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
