import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    DEMO_SERVER_API_URL:
      process.env.DEMO_SERVER_API_URL ||
      process.env.NEXT_PUBLIC_DEMO_SERVER_API_URL ||
      "",
    GOOGLE_API_ID:
      process.env.GOOGLE_API_ID || process.env.NEXT_PUBLIC_GOOGLE_API_ID || "",
    GOOGLE_AUTHORIZED_ORIGINS:
      process.env.GOOGLE_AUTHORIZED_ORIGINS ||
      process.env.NEXT_PUBLIC_GOOGLE_AUTHORIZED_ORIGINS ||
      "",
    FACEBOOK_API_ID:
      process.env.FACEBOOK_API_ID ||
      process.env.NEXT_PUBLIC_FACEBOOK_API_ID ||
      "",
    FACEBOOK_API_VERSION:
      process.env.FACEBOOK_API_VERSION ||
      process.env.NEXT_PUBLIC_FACEBOOK_API_VERSION ||
      "v21.0",
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
