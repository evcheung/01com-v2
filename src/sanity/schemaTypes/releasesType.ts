import { defineField, defineType } from "sanity";

export const releasesType = defineType({
  name: "releases",
  title: "press-releases",
  type: "document",
  fields: [
    defineField({
      name: "date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      type: "string"
    }),
  ],
});
