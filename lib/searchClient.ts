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

export type SearchProduct = {
  id: number;
  title: string;
  color: string;
  category: string;
  image: string;
  price: number;
  discountedPrice: number;
};

const CATEGORY_LABELS: Record<string, string> = {
  bifoldwallet: "Bi-Fold",
  trifoldwallet: "Tri-Fold",
  cardholder: "Card Holder",
  longwallet: "Traveller Wallet",
  gifts: "Gifts",
};

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category;
}

export function searchProducts(
  products: SearchProduct[],
  query: string,
  limit = 8
): SearchProduct[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);

  return products
    .filter((p) => {
      const haystack = [
        p.title,
        p.color,
        p.category,
        categoryLabel(p.category),
      ]
        .join(" ")
        .toLowerCase();
      return tokens.every((t) => haystack.includes(t));
    })
    .slice(0, limit);
}
