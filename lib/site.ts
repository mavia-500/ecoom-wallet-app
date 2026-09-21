export const SITE_NAME = "Hilyah";
export const SITE_DEFAULT_URL = "https://hilyah.pk";

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || SITE_DEFAULT_URL
  );
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
