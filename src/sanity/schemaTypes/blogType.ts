import { defineField, defineType } from "sanity";

export const blogType = defineType({
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
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
            name: "date",
            type: "date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title" },
            validation: (rule) => rule.required(),
        }),
    ],
});