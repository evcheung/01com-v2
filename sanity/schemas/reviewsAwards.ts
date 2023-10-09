import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'reviews-awards',
  title: 'Reviews / Awards',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'imageAltText',
      title: 'Image Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
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
