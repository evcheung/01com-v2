import type { NextConfig } from "next";

const LIVE_DEMO_API_PATH = "/bounty/api";
const PRODUCTION_GOOGLE_AUTHORIZED_ORIGINS =
  "https://www.01com.com,https://01com.com";

function getConfiguredEnv(...names: string[]) {
  return names
    .map((name) => process.env[name]?.trim())
    .find((value): value is string => Boolean(value)) || "";
}

function resolveDemoApiUrl() {
  const configured = getConfiguredEnv(
    "DEMO_SERVER_API_URL",
    "NEXT_PUBLIC_DEMO_SERVER_API_URL"
  );

  if (!configured) {
    return LIVE_DEMO_API_PATH;
  }

  try {
    const url = new URL(configured);

    if (url.hostname === "www.ironcap.ca" || url.hostname === "ironcap.ca") {
      return LIVE_DEMO_API_PATH;
    }
  } catch {
    return configured;
  }

  return configured;
}

function resolveGoogleAuthorizedOrigins() {
  const configured = getConfiguredEnv(
    "GOOGLE_AUTHORIZED_ORIGINS",
    "NEXT_PUBLIC_GOOGLE_AUTHORIZED_ORIGINS"
  );

  if (configured) {
    return configured;
  }

  return process.env.NODE_ENV === "production"
    ? PRODUCTION_GOOGLE_AUTHORIZED_ORIGINS
    : "";
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    DEMO_SERVER_API_URL: resolveDemoApiUrl(),
    GOOGLE_API_ID:
      process.env.GOOGLE_API_ID || process.env.NEXT_PUBLIC_GOOGLE_API_ID || "",
    GOOGLE_AUTHORIZED_ORIGINS: resolveGoogleAuthorizedOrigins(),
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
