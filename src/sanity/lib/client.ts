import type { QueryParams } from "@sanity/client";
import { createClient } from "next-sanity";
import { draftMode } from "next/headers";

import { apiVersion, dataset, projectId } from "../env";
import { getSanityReadToken } from "./secrets";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  perspective: "published",
  useCdn: false,
});

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
