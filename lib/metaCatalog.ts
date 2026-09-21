import bifoldProducts from "@/data/bifoldProduct";
import trifoldProducts from "@/data/trifoldProducts";
import cardholderProducts from "@/data/carholderProducts";
import longwalletProducts from "@/data/longwalletProducts";
import giftProducts from "@/data/giftProducts";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export type MetaCatalogItem = {
  id: string;
  title: string;
  description: string;
  availability: "in stock";
  condition: "new";
  price: string;
  sale_price: string;
  link: string;
  image_link: string;
  additional_image_link: string;
  brand: string;
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
};

const GOOGLE_CATEGORY = "5605"; // Wallets

function cleanText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function toItem(
  product: SourceProduct,
  categoryPath: string,
  productType: string
): MetaCatalogItem {
  const finalPrice = product.price - product.discountedPrice;
  const hasSale = product.discountedPrice > 0;
  const extraImages = product.image
    .slice(1, 11)
    .map((src) => absoluteUrl(src))
    .join(",");

  return {
    id: `${categoryPath}_${product.id}`,
    title: cleanText(product.title).slice(0, 150),
    description: cleanText(product.description).slice(0, 5000),
    availability: "in stock",
    condition: "new",
    price: `${product.price.toFixed(2)} PKR`,
    sale_price: hasSale ? `${finalPrice.toFixed(2)} PKR` : "",
    link: absoluteUrl(`/${categoryPath}/${product.id}`),
    image_link: absoluteUrl(product.image[0] || "/images/logo1.webp"),
    additional_image_link: extraImages,
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
      toItem(p, "bifoldwallet", "Leather Wallets > Bi-Fold")
    ),
    ...trifoldProducts.map((p) =>
      toItem(p, "trifoldwallet", "Leather Wallets > Tri-Fold")
    ),
    ...cardholderProducts.map((p) =>
      toItem(p, "cardholder", "Leather Wallets > Card Holder")
    ),
    ...longwalletProducts.map((p) =>
      toItem(p, "longwallet", "Leather Wallets > Long Wallet")
    ),
    ...giftProducts.map((p) =>
      toItem(p, "gifts", "Leather Wallets > Gifts")
    ),
  ];
}

function csvEscape(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function buildMetaCatalogCsv(): string {
  const items = getMetaCatalogItems();
  const headers = [
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
    "brand",
    "product_type",
    "google_product_category",
    "color",
    "item_group_id",
  ] as const;

  const rows = items.map((item) =>
    headers.map((key) => csvEscape(String(item[key] ?? ""))).join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}
