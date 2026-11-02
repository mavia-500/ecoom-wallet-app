import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  async headers() {
    const longCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];
    const homeLcpPreload = [
      {
        key: "Link",
        value:
          "</images/wem.webp>; rel=preload; as=image; type=image/webp; fetchpriority=high",
      },
    ];
    return [
      { source: "/", headers: homeLcpPreload },
      { source: "/home", headers: homeLcpPreload },
      { source: "/images/:path*", headers: longCache },
      { source: "/assets/:path*", headers: longCache },
    ];
  },
};

export default nextConfig;
