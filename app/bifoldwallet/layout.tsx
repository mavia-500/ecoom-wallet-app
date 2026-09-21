import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bi-Fold Leather Wallets for Men | Hilyah Pakistan",
  description:
    "Shop handcrafted bi-fold leather wallets at Hilyah. Genuine leather, cash on delivery across Pakistan, and lifetime leather warranty.",
  path: "/bifoldwallet",
  keywords: [
    "bifold wallet Pakistan",
    "bi-fold leather wallet",
    "men bifold wallet",
    "Hilyah bifold",
  ],
});

export default function BifoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
