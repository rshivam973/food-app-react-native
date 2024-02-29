import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: rule => rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'image of the restaurant'
    }),
    defineField({
        name: 'lat',
        type: 'number',
        title: 'latitude of the restaurant'
    }),
    defineField({
        name: 'lng',
        type: 'number',
        title: 'longitude of the restaurant'
    }),
    defineField({
        name: 'address',
        type: 'string',
        title: 'restaurant address',
        validation: rule => rule.required(),
    }),
    defineField({
        name: 'rating',
        type: 'number',
        title: 'Enter a number between 1 to 5',
        validation: rule => rule.required().min(1).max(5).error('Please enter a value between 1 to 5')
    }),
    defineField({
        name: 'reviews',
        type: 'number',
        title: 'Enter the total reviews',
        validation: rule => rule.required()
    }),
    defineField({
        name: 'type',
        title: 'Category',
        validation: rule => rule.required(),
        type: 'reference',
        to: [{type: 'category'}]
    }),
    defineField({
        name: 'dishes',
        type: 'array',
        title: 'Dishes',
        of: [{type: 'reference', to: [{type: 'dish'}] }],
    }),
  ],
})
