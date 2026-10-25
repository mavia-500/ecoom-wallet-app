import type { Review } from "./reviews";

const EXTRA_META: Record<string, { count: number; ratingSum: number }> = {
  "cardholder:36": { count: 30, ratingSum: 135 },
};

/** Ratings only — used for SEO aggregate, not shipped as review text. */
const EXTRA_RATINGS: Record<string, number[]> = {
  "cardholder:36": [
    5, 4, 5, 5, 3, 5, 4, 5, 5, 4, 5, 3, 5, 4, 5, 5, 4, 5, 5, 4, 5, 3, 5, 4, 5,
    5, 4, 5, 4, 5,
  ],
};

function key(category: string, productId: number) {
  return `${category}:${productId}`;
}

export function extraReviewMeta(category: string, productId: number) {
  return EXTRA_META[key(category, productId)] ?? { count: 0, ratingSum: 0 };
}

export function extraReviewRatingStubs(category: string, productId: number) {
  return (EXTRA_RATINGS[key(category, productId)] ?? []).map((rating) => ({
    rating,
  }));
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
  return [];
}
