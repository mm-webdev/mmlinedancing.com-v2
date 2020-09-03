import { MdEventAvailable } from "react-icons/md";

export default {
  title: "Classes",
  name: "timetable",
  type: "document",
  icon: MdEventAvailable,
  fields: [
    {
      title: "Class Name",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Day and Time",
      name: "scheduledDayAndTime",
      type: "array",
      of: [
        {
          type: "dayAndTime",
        },
      ],
      description:
        "This records the class day and time. Please note you can have multiple days/times recorded here, they will all appear as though that class is on for both those days/times. You can delete any you don't need.",
      validation: (Rule) => [
        Rule.required().error("You need a day and time value."),
        Rule.unique().error(
          "You have entered the same value twice, please delete one of these values, you only need it entered once."
        ),
      ],
    },
    {
      title: "Level",
      name: "level",
      type: "string",
      options: {
        list: ["Beginner", "Intermediate", "Advanced"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Cost",
      name: "cost",
      type: "string",
    },
    {
      title: "Class Notes",
      name: "notes",
      type: "text",
      description:
        "This will show on the timetable page if you have any class notes.",
    },
  ],
  preview: {
    select: {
      title: 'title',
      level: 'level'
    },
    prepare(selection) {
      const {title, level} = selection
      return {
        title: title,
        subtitle: `Level: ${level}`
      }
    }
  }
};
