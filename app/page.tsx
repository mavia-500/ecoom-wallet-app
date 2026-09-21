import HomePageContent from "@/components/HomePageContent";
import JsonLd from "@/components/JsonLd";
import { homeFaqs } from "@/data/faqs";
import { absoluteUrl } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hilyah | Genuine Leather Wallets for Men in Pakistan",
  description:
    "Shop premium handcrafted leather wallets from Hilyah. Bifold, trifold, card holders & gifts with cash on delivery across Pakistan and a lifetime leather warranty.",
  path: "/",
  keywords: [
    "leather wallets Pakistan",
    "buy wallets online Pakistan",
    "Hilyah",
    "genuine leather wallets",
    "COD wallets Pakistan",
  ],
});

export default function HomePage() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/wem.webp"
        fetchPriority="high"
      />
      <JsonLd
        data={[
          faqJsonLd(homeFaqs),
          breadcrumbJsonLd([{ name: "Home", path: "/" }]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hilyah | Genuine Leather Wallets for Men in Pakistan",
            description:
              "Shop premium handcrafted leather wallets from Hilyah. Bifold, trifold, card holders & gifts with cash on delivery across Pakistan and a lifetime leather warranty.",
            url: absoluteUrl("/"),
            isPartOf: {
              "@type": "WebSite",
              name: "Hilyah",
              url: absoluteUrl("/"),
            },
          },
        ]}
      />
      <HomePageContent />
    </>
  );
}
