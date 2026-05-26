import { defineField, defineType } from "sanity";

export const blogType = defineType({
    name: "blogPost",
    title: "Blog",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "summary",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "body",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "mainImage",
            type: "image",
            fields: [
                defineField({
                    name: "alt",
                    type: "string",
                    title: "Alt Text",
                }),
            ],
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title" },
            validation: (rule) => rule.required(),
        }),
    ],
});