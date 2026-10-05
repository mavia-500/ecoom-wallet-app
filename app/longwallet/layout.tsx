import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Traveller Leather Wallets for Men | Hilyah Pakistan",
  description:
    "Shop traveller leather wallets crafted by Hilyah. Spacious genuine leather, COD across Pakistan, lifetime leather warranty.",
  path: "/longwallet",
  keywords: [
    "traveller wallet Pakistan",
    "leather traveller wallet",
    "men traveller wallet",
    "Hilyah traveller wallet",
  ],
});

export default function LongwalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
