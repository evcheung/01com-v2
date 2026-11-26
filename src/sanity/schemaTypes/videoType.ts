import { defineField, defineType } from "sanity";

export const videoType = defineType({
  name: "resourceVideo",
  title: "Resource Videos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      title: "Video link",
      type: "url",
      validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "date",
      title: "Date",
      description: "Videos are displayed newest first.",
      type: "date",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [{
    title: "Date, newest first",
    name: "dateDesc",
    by: [{ field: "date", direction: "desc" }],
  }],
  preview: { select: { title: "title", subtitle: "date" } },
});
