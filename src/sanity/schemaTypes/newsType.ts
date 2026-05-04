import { defineField, defineType } from "sanity";

export const newsType = defineType({
    name: "news",
    title: "News",
    type: "document",
    fields: [
        defineField({
            name: "date",
            type: "date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "body",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title" },
            validation: (rule) => rule.required(),
        }),
    ],
});