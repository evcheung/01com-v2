import { createClient } from 'next-sanity'
import type { QueryParams } from '@sanity/client'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

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
