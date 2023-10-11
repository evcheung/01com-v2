import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'investor-relations-videos',
  title: 'Investor Relations Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Youtube Link',
      type: 'url',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured?',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isFeatured: 'isFeatured'
    },
    prepare: ({ title, isFeatured }) => {
      return {
        title,
        subtitle: Boolean(isFeatured) ? `✅ Featured` : ''
      }
    }
  },
})
