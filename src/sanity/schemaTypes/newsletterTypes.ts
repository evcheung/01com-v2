import { defineField, defineType } from "sanity";

export const newsletterType = defineType({
    name: "newsletter",
    title: "Newsletter",
    type: "document",
    fields: [
        defineField({
            name: "year",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "month",
            type: "array",
            of: [{ type: "string" }],
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
            options: { source: (doc) => `${doc.year}-${doc.month}` },
            validation: (rule) => rule.required(),
        }),
    ],
});