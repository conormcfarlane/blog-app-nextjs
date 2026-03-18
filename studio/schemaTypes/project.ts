import { defineField, defineType } from "sanity";

export const project = defineType({
    name: 'project',
    title: 'project',
    type: 'document',
    fields: [
    defineField({
            name:'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),    
          }),
    defineField({
            name:'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Link',
      type: 'url',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Site Link',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    ]
})