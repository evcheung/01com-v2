import { defineField, defineType } from 'sanity'
// TODO: new FAQ pages are not very discoverable on the site
export default defineType({
  name: 'im-in-touch-server-faqs',
  title: "I'm InTouch Server FAQs",
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'im-in-touch-server-faq-categories' }]
    }),
    defineField({
      name: 'imInTouchServerFAQ',
      title: "I'm InTouch Server FAQ",
      type: 'array',
      of: [
        {
          title: "FAQ",
          type: "object",
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'array',
              of: [{ type: 'block' }]
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
      title: 'category.category',
    }
  },
})
