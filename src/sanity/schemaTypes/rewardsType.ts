import { defineField, defineType } from "sanity";

export const rewardsType = defineType({
    name: "reviews-awards",
    title: "Reviews / Awards",
    type: "document",
    fields: [
        defineField({
            name: "image",
            type: "image",
        }),
        defineField({
            name: "date",
            type: "date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "imageAltText",
            type: "string",
            title: "Image Alt Text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "link",
            type: "string",
        }),

        defineField({
            name: "description",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        // defineField({
        //     name: "body",
        //     type: "array",
        //     of: [{ type: "block" }],
        // }),
        // defineField({
        //     name: "slug",
        //     type: "slug",
        //     options: { source: "title" },
        //     validation: (rule) => rule.required(),
        // }),
                // defineField({
        //     name: "title",
        //     type: "string",
        //     validation: (rule) => rule.required(),
        // }),
    ],
});