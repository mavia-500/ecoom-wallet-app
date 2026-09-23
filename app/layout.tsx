import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import MetaPixel from "@/components/MetaPixel";
import { FaWhatsappSquare } from "react-icons/fa";
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
  weight: ["400", "500", "600", "700"],
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
          <Navbar />
          <main>{children}</main>
          <ScrollToTop />
          <a
            href="https://wa.me/923285478737?text=Hello%2C%20I%20am%20interested%20in%20Hilyah%20leather%20wallets"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-20 right-4 z-50 drop-shadow-lg transition-transform hover:scale-105 sm:bottom-6"
          >
            <FaWhatsappSquare className="text-5xl text-[#25D366]" />
          </a>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
