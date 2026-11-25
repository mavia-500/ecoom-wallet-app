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
  async redirects() {
    return [
      {
        source: "/bifoldwallet/mini-leather-wallet",
        destination: "/bifoldwallet",
        permanent: true,
      },
      {
        source: "/bifoldwallet/bifold-leather-wallet",
        destination: "/bifoldwallet",
        permanent: true,
      },
      {
        source: "/bifoldwallet/burgundy-red-stitch-quick-access-bifold",
        destination: "/bifoldwallet/nesticraft-black-passport-holder",
        permanent: true,
      },
      {
        source: "/cardholder/olive-diagonal-pocket-slim-card-holder",
        destination: "/cardholder/diagonal-pocket-slim-card-holder",
        permanent: true,
      },
      {
        source: "/cardholder/brown-envelope-flap-slim-card-holder",
        destination: "/cardholder/envelope-flap-slim-card-holder",
        permanent: true,
      },
      {
        source: "/cardholder/lost-dutch-leather",
        destination: "/cardholder/slim-full-grain-leather-tuck-flap-wallet",
        permanent: true,
      },
    ];
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
