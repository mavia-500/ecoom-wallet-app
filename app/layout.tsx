import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import ScrollToTop from "@/components/ScrollToTop";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import MetaPixel from "@/components/MetaPixel";
import AnnouncementBar from "@/components/AnnouncementBar";
import { getSiteUrl } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: true,
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

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
  return (
    <html lang="en-PK">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <MetaPixel />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Providers>
          <AnnouncementBar />
          <Navbar />
          <main className="pb-24 lg:pb-0">{children}</main>
          <ScrollToTop />
          <a
            href="https://wa.me/923285478737?text=Hello%2C%20I%20am%20interested%20in%20Hilyah%20leather%20wallets"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-28 right-4 z-50 drop-shadow-lg transition-transform hover:scale-105 sm:bottom-6"
          >
            <svg
              viewBox="0 0 32 32"
              className="h-12 w-12"
              aria-hidden
            >
              <path
                fill="#25D366"
                d="M16 2C8.3 2 2 8.1 2 15.6c0 2.5.7 4.8 1.9 6.9L2 30l7.7-1.9c2 1.1 4.3 1.7 6.3 1.7 7.7 0 14-6.1 14-13.6S23.7 2 16 2z"
              />
              <path
                fill="#fff"
                d="M23.1 19.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.1c-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.7 2.5.8 3.4.7.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.5-.3z"
              />
            </svg>
          </a>
          <Footer />
          <MobileBottomNav />
        </Providers>
      </body>
    </html>
  );
}
