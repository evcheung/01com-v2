import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'im-in-touch-faqs',
  title: "I'm InTouch FAQs",
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'im-in-touch-faq-categories' }]
    }),
    defineField({
      name: 'imInTouchFAQ',
      title: "I'm InTouch FAQ",
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
              of: [{ type: 'block' }, { type: 'image' }],
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
