export const SITE_NAME = "Hilyah";
export const SITE_DEFAULT_URL = "https://www.hilyah.online";

/** Always returns a valid absolute origin (https://...), never throws. */
export function getSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || SITE_DEFAULT_URL)
    .trim()
    .replace(/\/$/, "");

  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

  try {
    const url = new URL(withProtocol);
    if (!url.hostname) return SITE_DEFAULT_URL;
    return url.origin;
  } catch {
    return SITE_DEFAULT_URL;
  }
}

/** Public HTTPS URL for a site path or external URL (path segments are encoded). */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (!path || path === "/") return `${base}/`;

  if (/^https?:\/\//i.test(path)) {
    try {
      return new URL(path).href;
    } catch {
      return path;
    }
  }

  const pathname = path.startsWith("/") ? path : `/${path}`;
  const encodedPath = pathname
    .split("/")
    .map((segment) => (segment ? encodeURIComponent(segment) : ""))
    .join("/");

  return new URL(encodedPath, `${base}/`).href;
}
