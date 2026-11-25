import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import MetaPixel from "@/components/MetaPixel";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import GoogleTagManager from "@/components/GoogleTagManager";
import AnnouncementBar from "@/components/AnnouncementBar";
import PurchaseNotification from "@/components/PurchaseNotification";
import { getSearchIndex } from "@/lib/catalog";
import { getSiteUrl } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

// Fonts load via <link> (not next/font/google) so Amplify builds do not hit the
// known Google Fonts flake: Cannot read properties of null (reading '1').

const siteUrl = getSiteUrl();

/** Prefer a real product photo for social previews over the logo. */
const DEFAULT_OG_IMAGE = "/images/wem.webp";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1614",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hilyah | Genuine Leather Wallets for Men in Pakistan",
    template: "%s | Hilyah",
  },
  description:
    "Shop premium handcrafted leather wallets from Hilyah. Bifold, trifold, card holders & gifts. Cash on delivery, fast shipping across Pakistan, lifetime leather warranty.",
  keywords: [
    "leather wallets Pakistan",
    "men wallets Pakistan",
    "Hilyah wallets",
    "handmade wallets",
    "wallets in Lahore",
    "wallets in Karachi",
    "wallets in Islamabad",
    "wallets in Rawalpindi",
    "buy wallets online Pakistan",
    "genuine leather wallets",
    "bifold wallet",
    "trifold wallet",
    "COD wallets Pakistan",
  ],
  authors: [{ name: "Hilyah" }],
  creator: "Hilyah",
  publisher: "Hilyah",
  applicationName: "Hilyah",
  category: "shopping",
  verification: {
    google: "CM6kwdFEJj2jVmf7EeFnksHNJfN7Z6Dmp0MTFPB06ug",
  },
  icons: {
    icon: [{ url: "/images/logo1.webp", type: "image/webp" }],
    apple: [{ url: "/images/logo1.webp", type: "image/webp" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Hilyah | Genuine Leather Wallets for Men in Pakistan",
    description:
      "Premium handcrafted leather wallets. COD available. Lifetime leather warranty. Ships across Pakistan.",
    url: siteUrl,
    siteName: "Hilyah",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: "Hilyah premium leather wallets",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilyah | Genuine Leather Wallets for Men in Pakistan",
    description:
      "Premium handcrafted leather wallets with COD and lifetime warranty across Pakistan.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const toastProducts = getSearchIndex().map(
    ({ id, title, image, category }) => ({ id, title, image, category }),
  );

  return (
    <html lang="en-PK">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Figtree:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <MetaPixel />
        <MicrosoftClarity />
        <GoogleTagManager />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Providers>
          <AnnouncementBar />
          <Navbar />
          <main className="pb-24 lg:pb-0">{children}</main>
          <ScrollToTop />
          <FloatingWhatsApp />
          <PurchaseNotification products={toastProducts} />
          <Footer />
          <MobileBottomNav />
        </Providers>
      </body>
    </html>
  );
}
