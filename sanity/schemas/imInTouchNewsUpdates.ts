import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'im-in-touch-news-updates',
  title: "I'm InTouch News & Updates",
  type: 'document',
  fields: [
    defineField({
      name: 'newsUpdatesItems',
      title: 'News & Updates Items',
      type: 'array',
      of: [
        {
          title: "News Item",
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
            },
          ]
        }
      ],
      options: {
        sortable: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'newsUpdatesItems.0.label'
    },
    prepare: ({ title }) => {
      return {
        title: 'I\'m InTouch News & Updates',
      }
    }
  }
} as any)
