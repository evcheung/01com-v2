import { createClient } from 'next-sanity'
import type { QueryParams } from '@sanity/client'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const sanityReadToken =
  process.env.SANITY_API_READ_TOKEN || process.env.SANITY_PREVIEW_READ_TOKEN

const latestContentClient = sanityReadToken
  ? client.withConfig({
      token: sanityReadToken,
      perspective: 'drafts',
      useCdn: false,
      stega: false,
    })
  : client

const sanityBuildTagSource =
  process.env.SANITY_BUILD_CACHE_BUSTER ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
  Date.now().toString(36)

const sanityBuildTag = `build.${sanityBuildTagSource}`
  .replace(/[^a-z0-9._-]/gi, '-')
  .slice(0, 75)

const freshFetchOptions = {
  tag: sanityBuildTag,
}

// Match Sanity client's default fetch ergonomics while cache-busting each build.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fetchSanity<Result = any>(
  query: string,
  params: QueryParams = {},
) {
  return client.fetch<Result>(query, params, freshFetchOptions)
}

// Static export builds need the saved Sanity draft overlay for investor content
// when the deployment provides a server-side read token.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fetchLatestSanity<Result = any>(
  query: string,
  params: QueryParams = {},
) {
  if (!sanityReadToken && process.env.NODE_ENV === 'production') {
    throw new Error(
      'Missing SANITY_API_READ_TOKEN or SANITY_PREVIEW_READ_TOKEN. Production builds require a Sanity read token so latest investor content is fetched from the draft overlay instead of stale published data.',
    )
  }

  return latestContentClient.fetch<Result>(query, params, freshFetchOptions)
}
