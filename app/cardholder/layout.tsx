import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leather Card Holders for Men | Hilyah Pakistan",
  description:
    "Slim genuine leather card holders from Hilyah. Minimal everyday carry with cash on delivery across Pakistan.",
  path: "/cardholder",
  keywords: [
    "leather card holder Pakistan",
    "slim card wallet",
    "men card holder",
    "Hilyah card holder",
  ],
});

export default function CardholderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
