import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'newsletters',
  title: 'Newsletters',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      initialValue: '2025',
      options: {
        list: [
          { title: '2026', value: '2026' },
          { title: '2025', value: '2025' },
          { title: '2024', value: '2024' },
          { title: '2023', value: '2023' },
          { title: '2022', value: '2022' },
          { title: '2021', value: '2021' },
          { title: '2020', value: '2020' },
        ],
      }
    }),
    defineField({
      name: 'month',
      title: 'Month',
      type: 'string',
      options: {
        list: [
          { title: 'January', value: 'January' },
          { title: 'February', value: 'February' },
          { title: 'March', value: 'March' },
          { title: 'April', value: 'April' },
          { title: 'May', value: 'May' },
          { title: 'June', value: 'June' },
          { title: 'July', value: 'July' },
          { title: 'August', value: 'August' },
          { title: 'September', value: 'September' },
          { title: 'October', value: 'October' },
          { title: 'November', value: 'November' },
          { title: 'December', value: 'December' },
        ],
      }
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'year',
      subtitle: 'month',
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
