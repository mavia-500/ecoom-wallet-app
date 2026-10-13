export const SITE_NAME = "Hilyah";
export const SITE_DEFAULT_URL = "https://www.hilyah.online";

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || SITE_DEFAULT_URL
  );
}

/** Public HTTPS URL for a site path or external URL (path segments are encoded). */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
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
