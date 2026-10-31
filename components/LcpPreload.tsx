/** Starts the page LCP image before other assets. No visual change. */
export default function LcpPreload({ href }: { href?: string | null }) {
  if (!href) return null;

  return (
    <link
      rel="preload"
      as="image"
      href={href}
      fetchPriority="high"
    />
  );
}
