import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'newsletters',
  title: 'Newsletters',
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
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'description',
      subtitle: 'date',
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
