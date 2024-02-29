import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: rule => rule.max(200)
    }),
    defineField({
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}] }]
    })
  ],
})
