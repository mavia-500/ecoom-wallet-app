export function productSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function productHref(
  category: string,
  product: { title: string }
): string {
  return `/${category}/${productSlug(product.title)}`;
}

export function findProductByParam<T extends { id: number; title: string }>(
  products: T[],
  param: string
): T | undefined {
  const slug = decodeURIComponent(param).toLowerCase();
  const bySlug = products.find((p) => productSlug(p.title) === slug);
  if (bySlug) return bySlug;

  const id = Number.parseInt(param, 10);
  if (!Number.isNaN(id)) return products.find((p) => p.id === id);

  return undefined;
}
