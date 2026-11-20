export type SanityWebhookBody = {
  _type?: string;
  slug?: string | { current?: string | null } | null;
};

export type RevalidateTarget = {
  path: string;
  type?: "page" | "layout";
};

export const SANITY_QUERY_TAGS = {
  blog: ["blogPost"],
  news: ["news"],
  newsletters: ["newsletters"],
  releases: ["press-releases", "releases"],
  rewards: ["reviews-awards"],
} as const;

const BLOG_PATHS: RevalidateTarget[] = [
  { path: "/resources/blog" },
  { path: "/resources/blog/[slug]", type: "page" },
  { path: "/resources/blog/page/[page]", type: "page" },
];

const NEWS_PATHS: RevalidateTarget[] = [
  { path: "/resources/news" },
  { path: "/resources/news/[slug]", type: "page" },
  { path: "/resources/news/page/[page]", type: "page" },
];

const NEWSLETTER_PATHS: RevalidateTarget[] = [
  { path: "/resources/newsletters" },
  { path: "/resources/newsletters/[slug]", type: "page" },
  { path: "/resources/newsletters/page/[page]", type: "page" },
];

const RELEASE_PATHS: RevalidateTarget[] = [
  { path: "/resources/press-releases" },
  { path: "/resources/press-releases/[slug]", type: "page" },
  { path: "/resources/press-releases/page/[page]", type: "page" },
];

const REWARD_PATHS: RevalidateTarget[] = [
  { path: "/resources/rewards" },
  { path: "/resources/rewards/[slug]", type: "page" },
  { path: "/resources/rewards/page/[page]", type: "page" },
];

const PATHS_BY_TYPE: Record<string, RevalidateTarget[]> = {
  blogPost: BLOG_PATHS,
  news: NEWS_PATHS,
  newsletters: NEWSLETTER_PATHS,
  "press-releases": RELEASE_PATHS,
  releases: RELEASE_PATHS,
  "reviews-awards": REWARD_PATHS,
};

function getSpecificDetailPath(type: string, slug: string): string | undefined {
  switch (type) {
    case "blogPost":
      return `/resources/blog/${slug}`;
    case "news":
      return `/resources/news/${slug}`;
    case "newsletters":
      return `/resources/newsletters/${slug}`;
    case "press-releases":
    case "releases":
      return `/resources/press-releases/${slug}`;
    case "reviews-awards":
      return `/resources/rewards/${slug}`;
    default:
      return undefined;
  }
}

export function getWebhookSlug(body: SanityWebhookBody): string | undefined {
  if (!body.slug) {
    return undefined;
  }

  if (typeof body.slug === "string") {
    return body.slug;
  }

  return body.slug.current ?? undefined;
}

export function getTagsForType(type: string): string[] {
  switch (type) {
    case "press-releases":
    case "releases":
      return [...SANITY_QUERY_TAGS.releases];
    case "blogPost":
      return [...SANITY_QUERY_TAGS.blog];
    case "news":
      return [...SANITY_QUERY_TAGS.news];
    case "newsletters":
      return [...SANITY_QUERY_TAGS.newsletters];
    case "reviews-awards":
      return [...SANITY_QUERY_TAGS.rewards];
    default:
      return [type];
  }
}

export function getPathsForWebhook(body: SanityWebhookBody): RevalidateTarget[] {
  if (!body._type) {
    return [];
  }

  const targets = [...(PATHS_BY_TYPE[body._type] ?? [])];
  const slug = getWebhookSlug(body);

  if (slug) {
    const detailPath = getSpecificDetailPath(body._type, slug);
    if (detailPath) {
      targets.push({ path: detailPath });
    }
  }

  return Array.from(
    new Map(targets.map((target) => [`${target.path}:${target.type ?? ""}`, target])).values(),
  );
}
