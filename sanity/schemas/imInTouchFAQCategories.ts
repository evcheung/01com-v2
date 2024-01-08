import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'im-in-touch-faq-categories',
  title: "I'm InTouch FAQ Categories",
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
  ],
})
