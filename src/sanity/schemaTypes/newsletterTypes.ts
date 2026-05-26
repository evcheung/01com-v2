import { defineField, defineType } from "sanity";

export const newsletterType = defineType({
    name: "newsletters",
    title: "Newsletters",
    type: "document",
    fields: [
        defineField({
            name: "year",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "month",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "link",
            type: "url",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title" },
        }),
    ],
});