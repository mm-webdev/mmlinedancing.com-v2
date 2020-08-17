export default {
  title: "Site Settings",
  name: "settings",
  type: "document",
  fields: [
    {
      title: "About Blurb",
      name: "about-text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Image",
      name: "about-image",
      type: "image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "caption",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
}
