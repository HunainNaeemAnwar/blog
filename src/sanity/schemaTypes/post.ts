import { defineType, defineField } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),

    defineField({
      name: "isFeatured",
      type: "boolean",
      title: "Is Featured?",
      description: "Mark this blog as featured for the hero section.",
    }),
  ],
});
