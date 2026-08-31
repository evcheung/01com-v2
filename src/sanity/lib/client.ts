import type { QueryParams } from "@sanity/client";
import { createClient } from "next-sanity";
import { draftMode } from "next/headers";

import { apiVersion, dataset, projectId } from "../env";
import { getSanityReadToken } from "./secrets";

type SanityBuildPerspective = "published" | "drafts";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  perspective: "published",
  useCdn: false,
});

function resolveSanityBuildPerspective(): SanityBuildPerspective {
  const configured = process.env.SANITY_BUILD_PERSPECTIVE?.trim();

  if (!configured) {
    return "published";
  }

  if (configured === "previewDrafts") {
    return "drafts";
  }

  if (configured === "published" || configured === "drafts") {
    return configured;
  }

  throw new Error(
    'Invalid SANITY_BUILD_PERSPECTIVE. Use "published" or "drafts".',
  );
}

export const sanityBuildPerspective = resolveSanityBuildPerspective();

function createBuildContentClient() {
  if (sanityBuildPerspective === "drafts") {
    const sanityReadToken = getSanityReadToken();

    if (!sanityReadToken) {
      throw new Error(
        "SANITY_BUILD_PERSPECTIVE=drafts requires SANITY_PREVIEW_READ_TOKEN or SANITY_API_READ_TOKEN.",
      );
    }

    return client.withConfig({
      token: sanityReadToken,
      perspective: "drafts",
      useCdn: false,
      stega: false,
    });
  }

  return client.withConfig({
    perspective: "published",
    useCdn: false,
    stega: false,
  });
}

const buildContentClient = createBuildContentClient();

const sanityBuildTagSource =
  process.env.SANITY_BUILD_CACHE_BUSTER ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
  Date.now().toString(36);

const sanityBuildTag = `build.${sanityBuildTagSource}`
  .replace(/[^a-z0-9._-]/gi, "-")
  .slice(0, 75);

const freshFetchOptions = {
  tag: sanityBuildTag,
};

type SanityFetchOptions = {
  query: string;
  params?: QueryParams;
  tags?: string[];
};

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
}: SanityFetchOptions): Promise<QueryResponse> {
  const { isEnabled } = await draftMode();
  const readToken = getSanityReadToken();

  if (isEnabled) {
    if (!readToken) {
      throw new Error(
        "A Sanity read token is required when Draft Mode is enabled. Set SANITY_PREVIEW_READ_TOKEN or SANITY_API_READ_TOKEN.",
      );
    }

    return client.fetch<QueryResponse>(query, params, {
      token: readToken,
      perspective: "drafts",
      stega: {
        enabled: true,
        studioUrl: "/studio",
      },
      next: {
        revalidate: 0,
      },
    });
  }

  return client.fetch<QueryResponse>(query, params, {
    cache: "force-cache",
    next: {
      tags,
    },
  });
}

// Match Sanity client's default fetch ergonomics while cache-busting each build.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fetchSanity<Result = any>(
  query: string,
  params: QueryParams = {},
) {
  return buildContentClient.fetch<Result>(query, params, freshFetchOptions);
}

// Backward-compatible alias for older investor pages. The selected build
// perspective is now controlled globally by SANITY_BUILD_PERSPECTIVE.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fetchLatestSanity<Result = any>(
  query: string,
  params: QueryParams = {},
) {
  return buildContentClient.fetch<Result>(query, params, freshFetchOptions);
}
