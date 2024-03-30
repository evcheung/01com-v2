import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'im-in-touch-server-faq-categories',
  title: "I'm InTouch Server FAQ Categories",
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
  ],
})
