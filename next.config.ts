import type { NextConfig } from "next";

const LIVE_DEMO_API_PATH = "/bounty/api";
const XMAIL_INSTALLATION_PATH = "/api/v1/installation";
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

function joinUrlPath(baseUrl: string, path: string) {
  return `${baseUrl.replace(/\/+$/, "")}${path}`;
}

function resolveXMailInstallationApiUrl() {
  const configured = getConfiguredEnv(
    "XMAIL_INSTALLATION_API_URL",
    "NEXT_PUBLIC_XMAIL_INSTALLATION_API_URL"
  );

  if (configured) {
    return configured;
  }

  if (process.env.NODE_ENV !== "production") {
    return "/api/installation";
  }

  const keyserverApiUrl = getConfiguredEnv("KEYSERVER_API_URL");

  return keyserverApiUrl
    ? joinUrlPath(keyserverApiUrl, XMAIL_INSTALLATION_PATH)
    : "/api/installation";
}

function resolveXMailRecaptchaSiteKey() {
  return getConfiguredEnv("RECAPTCHA_SITE_KEY", "NEXT_PUBLIC_RECAPTCHA_SITE_KEY");
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
    XMAIL_INSTALLATION_API_URL: resolveXMailInstallationApiUrl(),
    XMAIL_RECAPTCHA_SITE_KEY: resolveXMailRecaptchaSiteKey(),
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
      {
        protocol: "https",
        hostname: "www.01com.com",
        pathname: "/_next/static/media/**",
      },
    ],
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: { test?: { test?: (value: string) => boolean } }) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule?.issuer,
        resourceQuery: {
          not: [...(fileLoaderRule?.resourceQuery?.not ?? []), /url/],
        },
        use: ["@svgr/webpack"],
      },
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
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
