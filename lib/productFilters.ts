import type { CatalogProduct } from "@/lib/catalog";

export const PRODUCT_SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "top-selling", label: "Top Selling" },
  { id: "discount", label: "Biggest Discount" },
  { id: "name-asc", label: "Name: A to Z" },
  { id: "name-desc", label: "Name: Z to A" },
] as const;

export type ProductSortId = (typeof PRODUCT_SORTS)[number]["id"];

/** Matches home Top Selling order — used for the top-selling sort. */
const TOP_SELLING_KEYS = [
  "bifoldwallet-14",
  "bifoldwallet-2",
  "cardholder-15",
  "longwallet-1",
  "bifoldwallet-1",
  "bifoldwallet-3",
  "bifoldwallet-15",
  "longwallet-3",
];

export function finalPrice(p: { price: number; discountedPrice: number }) {
  return p.price - p.discountedPrice;
}

function productKey(category: string, id: number) {
  return `${category}-${id}`;
}

export function sortProducts<
  T extends { id: number; title: string; price: number; discountedPrice: number },
>(list: T[], sort: ProductSortId, category: string): T[] {
  const next = [...list];

  switch (sort) {
    case "price-asc":
      next.sort((a, b) => finalPrice(a) - finalPrice(b));
      break;
    case "price-desc":
      next.sort((a, b) => finalPrice(b) - finalPrice(a));
      break;
    case "top-selling": {
      const rank = new Map(TOP_SELLING_KEYS.map((key, i) => [key, i]));
      next.sort((a, b) => {
        const ra = rank.get(productKey(category, a.id)) ?? 999;
        const rb = rank.get(productKey(category, b.id)) ?? 999;
        if (ra !== rb) return ra - rb;
        return (
          b.discountedPrice - a.discountedPrice ||
          finalPrice(a) - finalPrice(b)
        );
      });
      break;
    }
    case "discount":
      next.sort(
        (a, b) =>
          b.discountedPrice / Math.max(b.price, 1) -
            a.discountedPrice / Math.max(a.price, 1) ||
          b.discountedPrice - a.discountedPrice,
      );
      break;
    case "name-asc":
      next.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-desc":
      next.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  return next;
}

export function sortCatalogProducts(
  list: CatalogProduct[],
  sort: ProductSortId,
): CatalogProduct[] {
  const next = [...list];

  switch (sort) {
    case "price-asc":
      next.sort((a, b) => finalPrice(a) - finalPrice(b));
      break;
    case "price-desc":
      next.sort((a, b) => finalPrice(b) - finalPrice(a));
      break;
    case "top-selling": {
      const rank = new Map(TOP_SELLING_KEYS.map((key, i) => [key, i]));
      next.sort((a, b) => {
        const ra = rank.get(productKey(a.category, a.id)) ?? 999;
        const rb = rank.get(productKey(b.category, b.id)) ?? 999;
        if (ra !== rb) return ra - rb;
        return (
          b.discountedPrice - a.discountedPrice ||
          finalPrice(a) - finalPrice(b)
        );
      });
      break;
    }
    case "discount":
      next.sort(
        (a, b) =>
          b.discountedPrice / Math.max(b.price, 1) -
            a.discountedPrice / Math.max(a.price, 1) ||
          b.discountedPrice - a.discountedPrice,
      );
      break;
    case "name-asc":
      next.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-desc":
      next.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  return next;
}
