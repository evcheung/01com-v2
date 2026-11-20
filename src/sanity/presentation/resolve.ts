import { defineLocations, type PresentationPluginOptions } from "sanity/presentation";

function detailLocations(sectionTitle: string, sectionHref: string) {
  return defineLocations({
    select: {
      title: "title",
      description: "description",
      slug: "slug.current",
    },
    resolve: (document) => ({
      locations: [
        ...(document?.slug
          ? [
              {
                title: document.title || document.description || "Untitled",
                href: `${sectionHref}/${document.slug}`,
              },
            ]
          : []),
        { title: sectionTitle, href: sectionHref },
      ],
    }),
  });
}

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    blogPost: detailLocations("All blog posts", "/resources/blog"),
    news: detailLocations("All news", "/resources/news"),
    newsletters: detailLocations("All newsletters", "/resources/newsletters"),
    "press-releases": defineLocations({
      select: { description: "description" },
      resolve: (document) => ({
        locations: [
          {
            title: document?.description || "Press releases",
            href: "/resources/press-releases",
          },
        ],
      }),
    }),
    "reviews-awards": defineLocations({
      select: { description: "description" },
      resolve: (document) => ({
        locations: [
          {
            title: document?.description || "Reviews and awards",
            href: "/resources/rewards",
          },
        ],
      }),
    }),
    "investor-relations-recent-events": defineLocations({
      locations: [{ title: "Investor relations", href: "/investor-relations" }],
    }),
    "investor-relations-videos": defineLocations({
      locations: [{ title: "Investor relations", href: "/investor-relations" }],
    }),
    "investor-relations-financial-results": defineLocations({
      locations: [{ title: "Investor relations", href: "/investor-relations" }],
    }),
    "investor-relations-latest-presentation": defineLocations({
      locations: [{ title: "Investor relations", href: "/investor-relations" }],
    }),
  },
};
