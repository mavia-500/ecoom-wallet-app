/** Builds clear alt text for product gallery images. */
export function productImageAlts(
  title: string,
  color: string,
  count: number,
  custom?: string[],
): string[] {
  if (custom?.length) {
    return Array.from({ length: count }, (_, i) => {
      const customAlt = custom[i]?.trim();
      if (customAlt) return customAlt;
      return defaultProductAlt(title, color, i + 1, count);
    });
  }

  return Array.from({ length: count }, (_, i) =>
    defaultProductAlt(title, color, i + 1, count),
  );
}

export function defaultProductAlt(
  title: string,
  color: string,
  index: number,
  total: number,
) {
  const colorPart = color?.trim() ? ` ${color.trim()}` : "";
  return `${title}${colorPart} leather product photo ${index} of ${total}`;
}

export function productCardAlt(title: string, color: string) {
  const colorPart = color?.trim() ? ` ${color.trim()}` : "";
  return `${title}${colorPart} leather product`;
}
