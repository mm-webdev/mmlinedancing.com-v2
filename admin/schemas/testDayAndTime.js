import TimePick from "../components/TimePicker"

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
  name: "testDayAndTime",
  title: "Day and Time",
  type: "object",

  fields: [
    {
      name: "day",
      title: "Day",
      type: "string",
      description: "Select day of week",
      options: {
        list: days,
      },
    },
    {
      name: "opensAt",
      title: "Start time",
      type: "string",
      description: "Choose what time the class starts",
      inputComponent: TimePick,
    },
    {
      name: "closesAt",
      title: "End time",
      type: "string",
      description: "Choose what time the class ends",
      inputComponent: TimePick,
    },
  ],

  preview: {
    select: {
      day: "day",
      opensAt: "opensAt",
      closesAt: "closesAt",
    },
    prepare({ day, opensAt, closesAt }) {
      return {
        title: `${day}`,
        subtitle: `${opensAt} to ${closesAt}`,
      }
    },
  },
}
