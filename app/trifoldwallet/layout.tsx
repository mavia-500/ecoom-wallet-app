import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tri-Fold Leather Wallets for Men | Hilyah Pakistan",
  description:
    "Browse premium tri-fold leather wallets from Hilyah. Extra card space, genuine leather, COD nationwide, lifetime warranty.",
  path: "/trifoldwallet",
  keywords: [
    "trifold wallet Pakistan",
    "tri-fold leather wallet",
    "men trifold wallet",
    "Hilyah trifold",
  ],
});

export default function TrifoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
