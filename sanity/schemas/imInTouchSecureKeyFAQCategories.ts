import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'im-in-touch-secure-key-faq-categories',
  title: "I'm InTouch SecureKey FAQ Categories",
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
  ],
})
