import { defineQuery } from 'next-sanity'

export const BLOGS_QUERY = defineQuery(`*[_type == "blogPost"] | order(publishedAt desc) [$start...$end] { _id, publishedAt, title, "slug": slug.current }`)
export const BLOGS_COUNT_QUERY = defineQuery(`count(*[_type == "blogPost"])`)
export const BLOG_QUERY = defineQuery(`*[_type == "blogPost" && slug.current == $slug][0] { _id, publishedAt, title, summary, body, "mainImage": mainImage.asset->url, "mainImageAlt": mainImage.alt }`)
export const BLOG_SLUGS_QUERY = defineQuery(`*[_type == "blogPost" && defined(slug.current)] { "slug": slug.current }`)

export const NEWS_QUERY = defineQuery(`*[_type == "news"] | order(date desc) [$start...$end] { _id, date, title, "slug": slug.current }`)
export const NEWS_COUNT_QUERY = defineQuery(`count(*[_type == "news"])`)
export const NEWS_ITEM_QUERY = defineQuery(`*[_type == "news" && slug.current == $slug][0] { _id, date, title, description, body }`)
export const NEWS_SLUGS_QUERY = defineQuery(`*[_type == "news" && defined(slug.current)] { "slug": slug.current }`)

export const NEWSLETTERS_QUERY = defineQuery(`*[_type == "newsletters"] | order(year desc, month desc) [$start...$end] { _id, year, month, link, "slug": slug.current }`)
export const NEWSLETTERS_COUNT_QUERY = defineQuery(`count(*[_type == "newsletters"])`)
export const NEWSLETTER_QUERY = defineQuery(`*[_type == "newsletters" && slug.current == $slug][0] { _id, year, month, link }`)
export const NEWSLETTER_SLUGS_QUERY = defineQuery(`*[_type == "newsletters" && defined(slug.current)] { "slug": slug.current }`)

export const RELEASES_QUERY = defineQuery(`*[_type == "press-releases"] | order(date desc) [$start...$end] { _id, date, description, link, }`)
export const RELEASES_COUNT_QUERY = defineQuery(`count(*[_type == "press-releases"])`)
export const RELEASE_QUERY = defineQuery(`*[_type == "press-releases" && slug.current == $slug][0] { _id, date, description, link }`)
export const RELEASE_SLUGS_QUERY = defineQuery(`*[_type == "press-releases" && defined(slug.current)] { "slug": slug.current }`)

export const REWARDS_QUERY = defineQuery(`*[_type == "reviews-awards"] | order(date desc) [$start...$end] { _id, date, description, "image": image.asset->url, imageAltText, link }`)
export const REWARDS_COUNT_QUERY = defineQuery(`count(*[_type == "reviews-awards"])`)
export const REWARD_QUERY = defineQuery(`*[_type == "reviews-awards" && slug.current == $slug][0] { _id, date, description, "image": image.asset->url, imageAltText, link }`)
export const REWARD_SLUGS_QUERY = defineQuery(`*[_type == "reviews-awards" && defined(slug.current)] { "slug": slug.current }`)


// queries for investor relations

const relevantLinksProjection = `relevantLinks[]{ _key, label, linkType, url }`;

export const INVESTOR_LATEST_PRESENTATION_QUERY = defineQuery(
    `*[_type == "investor-relations-latest-presentation"] | order(_updatedAt desc) { _id, date, description, isFeatured, ${relevantLinksProjection} }`
);
export const INVESTOR_LATEST_PRESENTATION_FEATURED_QUERY = defineQuery(
    `*[_type == "investor-relations-latest-presentation" && isFeatured == true][0] { _id, date, description, isFeatured, ${relevantLinksProjection} }`
);

export const INVESTOR_RECENT_EVENTS_QUERY = defineQuery(
    `*[_type == "investor-relations-recent-events"] | order(date desc) { _id, date, description, ${relevantLinksProjection} }`
);

export const INVESTOR_VIDEOS_QUERY = defineQuery(
    `*[_type == "investor-relations-videos"] | order(_updatedAt desc) { _id, title, description, link, isFeatured }`
);
export const INVESTOR_VIDEOS_FEATURED_QUERY = defineQuery(
    `*[_type == "investor-relations-videos" && isFeatured == true] | order(_updatedAt desc) { _id, title, description, link, isFeatured }`
);

export const INVESTOR_FINANCIAL_RESULTS_QUERY = defineQuery(
    `*[_type == "investor-relations-financial-results"] | order(_updatedAt desc) { _id, description, ${relevantLinksProjection} }`
);
