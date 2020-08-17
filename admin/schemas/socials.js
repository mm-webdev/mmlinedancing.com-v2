export default {
  title: "Social Network Links",
  name: "socials",
  type: "object",
  __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      title: "Social Network",
      name: "title",
      type: "string",
    },
    {
      title: "Link",
      name: "url",
      type: "string",
    },
    {
      title: "Font Awesome Icon Code",
      name: "facode",
      type: "string",
      description:
        "This is the Font Awesome code for the icon, can be found at https://fontawesome.com/icons?d=gallery",
    },
  ],
}
