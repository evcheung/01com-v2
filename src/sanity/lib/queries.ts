import { defineQuery } from 'next-sanity'

export const BLOGS_QUERY = defineQuery(`*[_type == "blog"] | order(date desc) [$start...$end] { _id, date, title, "slug": slug.current }`)
export const BLOGS_COUNT_QUERY = defineQuery(`count(*[_type == "blog"])`)
export const BLOG_QUERY = defineQuery(`*[_type == "blog" && slug.current == $slug][0] { _id, date, title, description, body }`)
export const BLOG_SLUGS_QUERY = defineQuery(`*[_type == "blog" && defined(slug.current)] { "slug": slug.current }`)

export const NEWS_QUERY = defineQuery(`*[_type == "news"] | order(date desc) [$start...$end] { _id, date, title, "slug": slug.current }`)
export const NEWS_COUNT_QUERY = defineQuery(`count(*[_type == "news"])`)
export const NEWS_ITEM_QUERY = defineQuery(`*[_type == "news" && slug.current == $slug][0] { _id, date, title, description, body }`)
export const NEWS_SLUGS_QUERY = defineQuery(`*[_type == "news" && defined(slug.current)] { "slug": slug.current }`)

export const NEWSLETTERS_QUERY = defineQuery(`*[_type == "newsletter"] | order(year desc, month desc) [$start...$end] { _id, year, month, link, "slug": slug.current }`)
export const NEWSLETTERS_COUNT_QUERY = defineQuery(`count(*[_type == "newsletter"])`)
export const NEWSLETTER_QUERY = defineQuery(`*[_type == "newsletter" && slug.current == $slug][0] { _id, year, month, link }`)
export const NEWSLETTER_SLUGS_QUERY = defineQuery(`*[_type == "newsletter" && defined(slug.current)] { "slug": slug.current }`)

export const RELEASES_QUERY = defineQuery(`*[_type == "releases"] | order(date desc) [$start...$end] { _id, date, title, "slug": slug.current }`)
export const RELEASES_COUNT_QUERY = defineQuery(`count(*[_type == "releases"])`)
export const RELEASE_QUERY = defineQuery(`*[_type == "releases" && slug.current == $slug][0] { _id, date, title, description, body, cta }`)
export const RELEASE_SLUGS_QUERY = defineQuery(`*[_type == "releases" && defined(slug.current)] { "slug": slug.current }`)

export const REWARDS_QUERY = defineQuery(`*[_type == "rewards"] | order(date desc) [$start...$end] { _id, date, title, "image": image.asset->url, "slug": slug.current }`)
export const REWARDS_COUNT_QUERY = defineQuery(`count(*[_type == "rewards"])`)
export const REWARD_QUERY = defineQuery(`*[_type == "rewards" && slug.current == $slug][0] { _id, date, title, description, "image": image.asset->url, body }`)
export const REWARD_SLUGS_QUERY = defineQuery(`*[_type == "rewards" && defined(slug.current)] { "slug": slug.current }`)
