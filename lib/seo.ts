import type { Metadata } from "next";
import { absoluteUrl, getSiteUrl, SITE_NAME } from "@/lib/site";

type ReviewLike = {
  rating?: number;
};

type ProductLike = {
  id: number;
  title: string;
  description: string;
  image: string[];
  color: string;
  price: number;
  discountedPrice: number;
  reviews?: ReviewLike[];
};

const DEFAULT_OG_IMAGE = "/images/wem.webp";

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = "website",
  robots,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  robots?: Metadata["robots"];
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image || DEFAULT_OG_IMAGE;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords,
    alternates: { canonical: url },
    robots,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
      locale: "en_PK",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function fitProductMetaTitle(
  productTitle: string,
  categoryLabel: string,
  min = 57,
  max = 60
): string {
  const brand = ` | ${SITE_NAME}`;
  const clean = productTitle.replace(/\s+/g, " ").trim();

  const suffixes = [
    ` | ${categoryLabel} | Pakistan${brand}`,
    ` | ${categoryLabel} | COD${brand}`,
    ` | ${categoryLabel}${brand}`,
    ` | Pakistan${brand}`,
    ` | COD${brand}`,
    brand,
    ` Online${brand}`,
  ];

  const cores = [clean, `Buy ${clean}`];

  for (const suffix of suffixes) {
    for (const core of cores) {
      const title = `${core}${suffix}`;
      if (title.length >= min && title.length <= max) return title;
    }
  }

  // Truncate the product name only — keep a clean suffix
  for (const suffix of suffixes) {
    for (const core of cores) {
      const room = max - suffix.length;
      if (room < 20) continue;

      let trimmed = core;
      if (trimmed.length > room) {
        trimmed = core.slice(0, room).trimEnd();
        const space = trimmed.lastIndexOf(" ");
        if (space >= 18) trimmed = trimmed.slice(0, space);
      }

      const title = `${trimmed}${suffix}`;
      if (title.length >= min && title.length <= max) return title;
    }
  }

  // Last resort: longest readable title that fits max, then pad into range
  let title = `${clean}${brand}`;
  if (title.length > max) {
    const room = max - brand.length;
    let trimmed = clean.slice(0, room).trimEnd();
    const space = trimmed.lastIndexOf(" ");
    if (space >= 18) trimmed = trimmed.slice(0, space);
    title = `${trimmed}${brand}`;
  }

  for (const mid of [` | ${categoryLabel}`, " | Pakistan", " | COD", " Online", " PK"]) {
    if (title.length >= min) break;
    const next = title.replace(brand, `${mid}${brand}`);
    if (next.length <= max) title = next;
  }

  if (title.length < min) {
    const room = max - title.length;
    if (room > 0) {
      title = title.replace(brand, `${" PK".slice(0, room)}${brand}`);
    }
  }

  if (title.length > max) title = title.slice(0, max).trimEnd();
  return title;
}

export function productMetadata(
  product: ProductLike | undefined,
  categoryPath: string,
  categoryLabel: string
): Metadata {
  if (!product) {
    return pageMetadata({
      title: `Product Not Found | ${SITE_NAME}`,
      description: `This ${categoryLabel.toLowerCase()} is unavailable. Browse genuine leather wallets at Hilyah.`,
      path: `/${categoryPath}`,
    });
  }

  const finalPrice = product.price - product.discountedPrice;
  const shortDesc =
    product.description.length > 110
      ? `${product.description.slice(0, 107).trim()}…`
      : product.description;

  return pageMetadata({
    title: fitProductMetaTitle(product.title, categoryLabel),
    description: `Buy ${product.title} as a ${categoryLabel.toLowerCase()} in ${product.color} for Rs ${finalPrice.toLocaleString("en-PK")} at Hilyah. ${shortDesc} COD across Pakistan.`,
    path: `/${categoryPath}/${product.id}`,
    image: product.image[0],
    keywords: [
      product.title,
      `${product.title} Pakistan`,
      `${categoryLabel} Pakistan`,
      categoryLabel,
      "leather wallet Pakistan",
      "Hilyah",
      "COD wallets",
      product.color,
    ],
  });
}

export function organizationJsonLd() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: site,
    logo: absoluteUrl("/images/logo1.webp"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description:
      "Premium handcrafted genuine leather wallets for men in Pakistan. Cash on delivery and lifetime leather warranty.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-328-5478737",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61573823107878",
      "https://www.instagram.com/hilyah965",
      "https://www.tiktok.com/@hilyah965",
    ],
  };
}

export function websiteJsonLd() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: site,
    inLanguage: "en-PK",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo1.webp"),
      },
    },
  };
}

export function faqJsonLd(
  faqs: { q: string; a: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function productJsonLd(
  product: ProductLike,
  categoryPath: string,
  categoryLabel: string
) {
  const finalPrice = product.price - product.discountedPrice;
  const url = absoluteUrl(`/${categoryPath}/${product.id}`);
  const rated = (product.reviews || []).filter(
    (r) => typeof r.rating === "number" && r.rating > 0
  );
  const ratingCount = rated.length;
  const ratingValue =
    ratingCount > 0
      ? Number(
          (
            rated.reduce((sum, r) => sum + (r.rating || 0), 0) / ratingCount
          ).toFixed(1)
        )
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.image.map((src) => absoluteUrl(src)),
    sku: `${categoryPath}-${product.id}`,
    mpn: `${categoryPath}-${product.id}`,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    color: product.color,
    category: categoryLabel,
    ...(ratingValue
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue,
            reviewCount: ratingCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "PKR",
      price: finalPrice,
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "PKR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "PK",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "PK",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListJsonLd({
  name,
  description,
  path,
  products,
  categoryPath,
}: {
  name: string;
  description: string;
  path: string;
  categoryPath: string;
  products: Array<{ id: number; title: string; image: string[] }>;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/${categoryPath}/${product.id}`),
        name: product.title,
        image: product.image[0] ? absoluteUrl(product.image[0]) : undefined,
      })),
    },
  };
}

export function catalogItemListJsonLd({
  name,
  description,
  path,
  products,
}: {
  name: string;
  description: string;
  path: string;
  products: Array<{
    id: number;
    title: string;
    image: string[];
    category: string;
  }>;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/${product.category}/${product.id}`),
        name: product.title,
        image: product.image[0] ? absoluteUrl(product.image[0]) : undefined,
      })),
    },
  };
}
