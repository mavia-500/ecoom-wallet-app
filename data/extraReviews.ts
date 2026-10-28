import type { Review } from "./reviews";

const EXTRA_META: Record<string, { count: number; ratingSum: number }> = {
  "cardholder:36": { count: 100, ratingSum: 448 },
  "bifoldwallet:14": { count: 150, ratingSum: 678 },
};

function key(category: string, productId: number) {
  return `${category}:${productId}`;
}

export function extraReviewMeta(category: string, productId: number) {
  return EXTRA_META[key(category, productId)] ?? { count: 0, ratingSum: 0 };
}

/** Dynamic import so extra review text is not in the main JS bundle. */
export async function loadExtraReviews(
  category: string,
  productId: number,
): Promise<Review[]> {
  if (category === "cardholder" && productId === 36) {
    const mod = await import("./charcoalSnapReviews");
    return mod.charcoalSnapExtraReviews;
  }
  if (category === "bifoldwallet" && productId === 14) {
    const mod = await import("./waxPullUpReviews");
    return mod.waxPullUpExtraReviews;
  }
  return [];
}
