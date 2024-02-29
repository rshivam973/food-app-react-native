import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Dish Description',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'image of the category'
    }),
    defineField({
        name: 'price',
        type: 'number',
        title: 'price of dish in USD'
    })
  ],
})
