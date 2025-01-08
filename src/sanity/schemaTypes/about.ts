const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "aboutme",
      type: "text",
      title: "Subtext",
    },
    {
      name: "image",
      type: "image",
      title: "About Image",
      options: { hotspot: true },
    },
  ],
};
export default about;
