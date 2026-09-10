import type { QueryParams } from "@sanity/client";
import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";

import { apiVersion, dataset, projectId } from "../env";
import { getSanityReadToken } from "./secrets";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  perspective: "published",
  useCdn: true,
  stega: {
    studioUrl:
      process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || `${siteUrl}/studio`,
  },
});

const serverToken = getSanityReadToken() || false;
const browserToken =
  process.env.SANITY_BROWSER_READ_TOKEN || getSanityReadToken() || false;

const { sanityFetch: liveSanityFetch, SanityLive } = defineLive({
  client,
  serverToken,
  browserToken,
});

export { SanityLive };

// Preserve the existing call signature while routing all CMS reads through
// Sanity Live. It handles published/draft perspectives, source maps, caching,
// and live invalidation based on Next.js Draft Mode.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchSanity<Result = any>(
  query: string,
  params: QueryParams = {},
  tags: string[] = [],
) {
  const { data } = await liveSanityFetch({
    query,
    params,
    tags: Array.from(new Set(["sanity", ...tags])),
  });

  return data as Result;
}

// Backward-compatible alias for investor pages.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchLatestSanity<Result = any>(
  query: string,
  params: QueryParams = {},
) {
  return fetchSanity<Result>(query, params, ["investor-relations"]);
}
