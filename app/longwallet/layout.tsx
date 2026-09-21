import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Long Leather Wallets for Men | Hilyah Pakistan",
  description:
    "Shop long leather wallets crafted by Hilyah. Spacious genuine leather, COD across Pakistan, lifetime leather warranty.",
  path: "/longwallet",
  keywords: [
    "long wallet Pakistan",
    "leather long wallet",
    "men long wallet",
    "Hilyah long wallet",
  ],
});

export default function LongwalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
