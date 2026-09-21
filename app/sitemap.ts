import type { MetadataRoute } from "next";
import bifoldProducts from "@/data/bifoldProduct";
import trifoldProducts from "@/data/trifoldProducts";
import cardholderProducts from "@/data/carholderProducts";
import longwalletProducts from "@/data/longwalletProducts";
import giftProducts from "@/data/giftProducts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://hilyah.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/sale`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/bifoldwallet`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/trifoldwallet`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/cardholder`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/longwallet`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/gifts`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/policy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const bifold = bifoldProducts.map((product) => ({
    url: `${siteUrl}/bifoldwallet/${product.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const trifold = trifoldProducts.map((product) => ({
    url: `${siteUrl}/trifoldwallet/${product.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const cardholders = cardholderProducts.map((product) => ({
    url: `${siteUrl}/cardholder/${product.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const longwallets = longwalletProducts.map((product) => ({
    url: `${siteUrl}/longwallet/${product.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const gifts = giftProducts.map((product) => ({
    url: `${siteUrl}/gifts/${product.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...bifold,
    ...trifold,
    ...cardholders,
    ...longwallets,
    ...gifts,
  ];
}
