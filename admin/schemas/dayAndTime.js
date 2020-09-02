// 1. Import the TimeInput react component
import TimeCleave from "../components/TimeCleave"

// 2. List of days the editor may choose from
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

export default {
  name: "dayAndTime",
  title: "Day and Time",
  type: "object",
  fields: [
    {
      name: "day",
      title: "Day",
      type: "string",
      options: {
        list: days,
      },
    },
    {
      name: "opensAt",
      title: "Start time",
      type: "string",
      inputComponent: TimeCleave,
      validation: Rule => [
        Rule.required().regex(
          /^(1[0-2]|0?[1-9]):[0-5][0-9](am|pm)$/i,
          {
            name: "time",
            invert: false
          }
        ).error("Pattern: \(h\)h:mm am/pm")
      ]
    },
    {
      name: "closesAt",
      title: "End time",
      type: "string",
      inputComponent: TimeCleave,
      validation: Rule => [
        Rule.required().regex(
          /^(1[0-2]|0?[1-9]):[0-5][0-9](am|pm)$/i,
          {
            name: "time",
            invert: false
          }
        ).error("Pattern: \(h\)h:mm am/pm")
      ]
    }
  ],

  preview: {
    select: {
      day: "day",
      opensAt: "opensAt",
      closesAt: "closesAt"
    },
    prepare({ day, opensAt, closesAt }) {
      return {
        title: `${day}`,
        subtitle: `${opensAt} to ${closesAt}`,
      }
    },
  },
}
