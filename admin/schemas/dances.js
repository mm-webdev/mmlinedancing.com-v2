import { MdQueueMusic } from "react-icons/md"

export default {
  title: "Dance Steps",
  name: "dances",
  type: "document",
  icon: MdQueueMusic,
  fields: [
    {
      title: "Dance Name",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Day and Time",
      name: "testAssignedDayAndTime",
      type: "array",
      of: [{ type: "testDayAndTime" }],
    },
    {
      title: "Choreographer",
      name: "choreographer",
      type: "string",
      validation: Rule => Rule.required(),
    },
    { title: "Song & Artist", name: "songartist", type: "string" },
    {
      title: "Level",
      name: "level",
      type: "string",
      options: {
        list: ["Beginner", "Intermediate", "Advanced"],
      },
      validation: Rule => Rule.required(),
    },
    {
      title: "File Upload",
      name: "file",
      type: "file",
      desc: "Use this to upload files for dance steps etc.",
    },
    { title: "Youtube Link", name: "youtube", type: "url" },
  ],
}
