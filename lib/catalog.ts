import bifoldProducts from "@/data/bifoldProduct";
import trifoldProducts from "@/data/trifoldProducts";
import cardholderProducts from "@/data/carholderProducts";
import longwalletProducts from "@/data/longwalletProducts";
import giftProducts from "@/data/giftProducts";

export type CatalogProduct = {
  id: number;
  title: string;
  description: string;
  image: string[];
  color: string;
  price: number;
  discountedPrice: number;
  category: string;
};

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
