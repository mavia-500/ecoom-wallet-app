import bifoldProducts from "@/data/bifoldProduct";
import trifoldProducts from "@/data/trifoldProducts";
import cardholderProducts from "@/data/carholderProducts";
import longwalletProducts from "@/data/longwalletProducts";
import giftProducts from "@/data/giftProducts";
import {
  categoryLabel,
  searchProducts,
  type CatalogProduct,
  type SearchProduct,
} from "@/lib/searchClient";

export { categoryLabel, searchProducts, type CatalogProduct, type SearchProduct };

function slim(
  products: Array<{
    id: number;
    title: string;
    description: string;
    image: string[];
    color: string;
    price: number;
    discountedPrice: number;
  }>,
  category: string
): CatalogProduct[] {
  return products.map(
    ({ id, title, description, image, color, price, discountedPrice }) => ({
      id,
      title,
      description,
      image,
      color,
      price,
      discountedPrice,
      category,
    })
  );
}

/** Listing cards only drops reviews so category pages stay light. */
export function forCategoryList(
  products: Array<{
    id: number;
    title: string;
    description: string;
    image: string[];
    color: string;
    price: number;
    discountedPrice: number;
    reviews?: unknown;
  }>
) {
  return products.map(
    ({ id, title, description, image, color, price, discountedPrice }) => ({
      id,
      title,
      description,
      image,
      color,
      price,
      discountedPrice,
    })
  );
}

/** Listing catalog without reviews (keeps client JS small). */
export function getCatalogProducts(): CatalogProduct[] {
  return [
    ...slim(bifoldProducts, "bifoldwallet"),
    ...slim(trifoldProducts, "trifoldwallet"),
    ...slim(cardholderProducts, "cardholder"),
    ...slim(longwalletProducts, "longwallet"),
    ...slim(giftProducts, "gifts"),
  ];
}

/** Slim index for sitewide product search. */
export function getSearchIndex(): SearchProduct[] {
  return getCatalogProducts().map(
    ({ id, title, color, category, image, price, discountedPrice }) => ({
      id,
      title,
      color,
      category,
      image: image[0] ?? "",
      price,
      discountedPrice,
    })
  );
}

/** Products currently on sale (discountedPrice > 0). */
export function getSaleProducts(): CatalogProduct[] {
  return getCatalogProducts()
    .filter((p) => p.discountedPrice > 0)
    .sort(
      (a, b) =>
        b.discountedPrice / b.price - a.discountedPrice / a.price ||
        b.discountedPrice - a.discountedPrice,
    );
}
