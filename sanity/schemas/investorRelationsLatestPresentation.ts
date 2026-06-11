import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'investor-relations-latest-presentation',
  title: 'Investor Relations Latest Presentation',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'relevantLinks',
      title: 'Relevant Links',
      type: 'array',
      of: [
        {
          title: "Link",
          type: "object",
          fields: [
            {
              name: "url",
              title: "URL",
              type: "url"
            },
            {
              name: "label",
              title: "Label",
              type: "string"
            }
          ]
        }
      ],
      options: {
        sortable: true,
      },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured?',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'description',
      isFeatured: 'isFeatured'
    },
    prepare: ({ title, isFeatured }) => {
      return {
        title,
        subtitle: Boolean(isFeatured) ? `✅ Featured` : ''
      }
    }
  },
} as any)
