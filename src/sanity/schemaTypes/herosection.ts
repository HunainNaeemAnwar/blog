const hero = {
  name: "featuredHeroImage",
  title: "Featured Hero Image",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      title: "Hero Image",
      options: { hotspot: true },
    },
  ],
};
export default hero;
