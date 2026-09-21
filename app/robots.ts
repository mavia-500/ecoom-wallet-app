import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://hilyah.pk";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/api/",
        "/signin",
        "/placeorder",
        "/cart",
        "/home",
        "/wallets",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
