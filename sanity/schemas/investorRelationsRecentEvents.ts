import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'investor-relations-recent-events',
  title: 'Investor Relations Recent Events',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'LL',
      }
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
            },
            {
              name: 'linkType',
              title: 'Link Type',
              type: 'string',
              options: {
                list: [
                  { title: 'PDF', value: 'pdf' },
                  { title: 'Video', value: 'video' },
                ],
              }
            }
          ]
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'description',
    }
  },
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [
        { field: 'date', direction: 'desc', }
      ],
    },
    {
      title: 'Date, Old',
      name: 'dateAsc',
      by: [
        { field: 'date', direction: 'asc' }
      ]
    },
  ]
})
