import { defineType, defineField, defineArrayMember } from 'sanity';

export const investorRelationsRecentEventsType = defineType({
    name: "investor-relations-recent-events",
    title: "Recent Events",
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
            name: "relevantLinks",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        defineField({
                            name: "label",
                            type: "string",
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: "linkType",
                            type: "string",
                            options: {
                                list: ["pdf", "video", "link"],
                            },
                        }),
                        defineField({
                            name: "url",
                            type: "url",
                        }),
                    ],
                }),
            ],
        }),
    ],
});

export const investorRelationsVideosType = defineType({
    name: "investor-relations-videos",
    title: "Investor Videos",
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
            name: "link",
            type: "url",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "isFeatured",
            type: "boolean",
            validation: (rule) => rule.required(),
        }),
    ],
});

export const investorRelationsFinancialResultsType = defineType({
    name: "investor-relations-financial-results",
    title: "Financial Results",
    type: "document",
    fields: [
        defineField({
            name: "description",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "relevantLinks",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        defineField({
                            name: "label",
                            type: "string",
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: "linkType",
                            type: "string",
                            options: {
                                list: ["pdf", "video", "link"],
                            },
                        }),
                        defineField({
                            name: "url",
                            type: "url",
                        }),
                    ],
                }),
            ],
        }),
    ],
});

export const investorRelationsLatestPresentationType = defineType({
    name:"investor-relations-latest-presentation",
    title: "Latest Presentation",
    type: "document",
    fields: [
        defineField({
            name: "date",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "isFeatured",
            type: "boolean",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "relevantLinks",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        defineField({
                            name: "label",
                            type: "string",
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: "linkType",
                            type: "string",
                            options: {
                                list: ["pdf", "video", "link"],
                            },
                        }),
                        defineField({
                            name: "url",
                            type: "url",
                        }),
                    ],
                }),
            ],
        }),
    ],
});