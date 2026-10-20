import bifoldProducts from "@/data/bifoldProduct";
import trifoldProducts from "@/data/trifoldProducts";
import cardholderProducts from "@/data/carholderProducts";
import longwalletProducts from "@/data/longwalletProducts";
import giftProducts from "@/data/giftProducts";
import { absoluteUrl, SITE_NAME } from "@/lib/site";
import { productHref } from "@/lib/productSlug";

/** Product feed row — every image for the product is in `image_links`. */
export type MetaFeedItem = {
  id: string;
  title: string;
  description: string;
  availability: "in stock" | "out of stock";
  condition: "new";
  price: string;
  link: string;
  /** All product images as comma-separated public HTTPS URLs. */
  image_links: string;
  brand: string;
};

export type MetaCatalogItem = MetaFeedItem & {
  /** First image (Meta requires `image_link`). */
  image_link: string;
  /** Remaining images for Meta `additional_image_link`. */
  additional_image_link: string;
  sale_price: string;
  product_type: string;
  google_product_category: string;
  color: string;
  item_group_id: string;
};

type SourceProduct = {
  id: number;
  title: string;
  description: string;
  image: string[];
  color: string;
  price: number;
  discountedPrice: number;
  stock: number;
};

const GOOGLE_CATEGORY = "5605"; // Wallets

function cleanText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function toAbsoluteImages(images: string[]): string[] {
  return images
    .filter(Boolean)
    .map((src) => absoluteUrl(src))
    .filter((url, index, arr) => arr.indexOf(url) === index);
}

function toItem(
  product: SourceProduct,
  categoryPath: string,
  productType: string,
): MetaCatalogItem {
  const finalPrice = product.price - product.discountedPrice;
  const hasSale = product.discountedPrice > 0;
  const images = toAbsoluteImages(
    product.image?.length ? product.image : ["/images/logo1.webp"],
  );
  const inStock = (product.stock ?? 0) > 0;

  return {
    id: `${categoryPath}_${product.id}`,
    title: cleanText(product.title).slice(0, 150),
    description: cleanText(product.description).slice(0, 5000),
    availability: inStock ? "in stock" : "out of stock",
    condition: "new",
    price: `${product.price.toFixed(2)} PKR`,
    sale_price: hasSale ? `${finalPrice.toFixed(2)} PKR` : "",
    link: absoluteUrl(productHref(categoryPath, product)),
    image_links: images.join(","),
    image_link: images[0],
    additional_image_link: images.slice(1).join(","),
    brand: SITE_NAME,
    product_type: productType,
    google_product_category: GOOGLE_CATEGORY,
    color: product.color,
    item_group_id: categoryPath,
  };
}

export function getMetaCatalogItems(): MetaCatalogItem[] {
  return [
    ...bifoldProducts.map((p) =>
      toItem(p, "bifoldwallet", "Leather Wallets > Bi-Fold"),
    ),
    ...trifoldProducts.map((p) =>
      toItem(p, "trifoldwallet", "Leather Wallets > Tri-Fold"),
    ),
    ...cardholderProducts.map((p) =>
      toItem(p, "cardholder", "Leather Wallets > Card Holder"),
    ),
    ...longwalletProducts.map((p) =>
      toItem(p, "longwallet", "Leather Wallets > Traveller Wallet"),
    ),
    ...giftProducts.map((p) => toItem(p, "gifts", "Leather Wallets > Gifts")),
  ];
}

function csvEscape(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

/** User CSV: one `image_links` column with every product image. */
const META_FEED_HEADERS = [
  "id",
  "title",
  "description",
  "availability",
  "condition",
  "price",
  "link",
  "image_links",
  "brand",
] as const satisfies readonly (keyof MetaFeedItem)[];

const META_CATALOG_HEADERS = [
  "id",
  "title",
  "description",
  "availability",
  "condition",
  "price",
  "sale_price",
  "link",
  "image_link",
  "additional_image_link",
  "image_links",
  "brand",
  "product_type",
  "google_product_category",
  "color",
  "item_group_id",
] as const satisfies readonly (keyof MetaCatalogItem)[];

function buildCsvFromHeaders<T extends Record<string, string>>(
  items: T[],
  headers: readonly (keyof T & string)[],
): string {
  const rows = items.map((item) =>
    headers.map((key) => csvEscape(String(item[key] ?? ""))).join(","),
  );
  return [headers.join(","), ...rows].join("\r\n");
}

/** Main product CSV: UTF-8 BOM, all images in `image_links`. */
export function buildMetaFeedCsv(): string {
  const items = getMetaCatalogItems();
  const body = buildCsvFromHeaders(items, META_FEED_HEADERS);
  return `\uFEFF${body}`;
}

/** Extended catalog CSV (Meta-friendly image_link + additional + full image_links). */
export function buildMetaCatalogCsv(): string {
  const items = getMetaCatalogItems();
  const body = buildCsvFromHeaders(items, META_CATALOG_HEADERS);
  return `\uFEFF${body}`;
}
