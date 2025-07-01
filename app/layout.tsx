import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "@/components/Footer";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import Link from "next/link";
import { FaWhatsappSquare } from "react-icons/fa";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



export const metadata: Metadata = {
  title: "Men's Leather Wallets in Pakistan - Buy Online | Hylia",
  description:
    "Discover premium genuine leather wallets for men in Pakistan. Shop our collection of bifold, trifold, and minimalist wallets .shipping & COD available across Pakistan.",
    keywords: [
      "leather wallets Pakistan",
      "men wallets Pakistan",
      "wallets for men",
      "handmade wallets",
      "wallets in Lahore",
      "wallets in Karachi",
      "wallets in Islambad",
      "wallets in Rawalpindi",
      "buy wallets online Pakistan",
      "stylish wallets",
      "genuine leather wallets",
     " men's leather wallet",
     " leather wallet Pakistan",
      "genuine leather wallet",
      " mens wallets online",
      " buy wallets Pakistan",
      " RFID wallet",
      " bifold wallet",
      " trifold wallet",
      " minimalist wallet",
      " wallet for men",
      " Pakistan online shopping",
      " mens accessories",
      " stylish wallets"
    ],
  openGraph: {
    title: "Men's Leather Wallets in Pakistan - Buy Online Hylia",
    description:
      "Discover premium genuine leather wallets for men in Pakistan. Shop our collection of bifold, trifold, and minimalist wallets with RFID protection. Free shipping & COD available across Pakistan.",
    url: "https://www.yourwebsite.com", // Replace with your actual website URL
    siteName: "hylia",
    images: [
      {
        url: "https://www.yourwebsite.com/images/og-image.jpg", // Replace with a compelling image of your wallet
        width: 1200,
        height: 630,
        alt: "Premium Men's Leather Wallets in Pakistan",
      },
    ],
    locale: "ur_PK", // Targeting English speakers in Pakistan
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Men's Leather Wallets in Pakistan - Buy Online | Hylia",
    description:
      "Discover premium genuine leather wallets for men in Pakistan. Shop our collection of bifold, trifold, and minimalist wallets . shipping & COD available across Pakistan.",
    creator: "@YourTwitterHandle", // Optional: Your brand's Twitter handle
    images: ["https://www.yourwebsite.com/images/twitter-image.jpg"], // Replace with an image optimized for Twitter
  },
  // Optional: Add canonical URL for SEO
  alternates: {
    canonical: "https://www.yourwebsite.com", // Replace with your actual website URL
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Meta Pixel Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '697594026040202');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* ✅ Noscript fallback in HTML string */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=697594026040202&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Announcement />
        <Navbar />
        {children}
        <div className="fixed top-50 right-4 z-50">
          <a
            href={
              'https://wa.me/923285478737?text=Hello%2C%20I%20am%20interested%20in%20your%20products"'
            }
          >
            <FaWhatsappSquare
              className="text-green-500 text-5xl cursor-pointer"
              target="_blank"
            />
          </a>
        </div>

        <Footer />
      </body>
    </html>
  );
}
