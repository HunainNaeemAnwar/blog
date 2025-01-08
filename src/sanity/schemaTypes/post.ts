const post = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },

    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "longDescription",
      title: "Long Description",
      type: "string",
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },

    {
      name: "isFeatured",
      type: "boolean",
      title: "Is Featured?",
      description: "Mark this blog as featured for the hero section.",
    },
  ],
};

export default post;
