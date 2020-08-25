export default {
  title: "Timetable",
  name: "timetable",
  type: "document",
  fields: [
    { title: "Class Name", name: "title", type: "string" },
    { 
      title: "Day of the Week", 
      name: "day", 
      type: "string",
      options: {
        list: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
      }
    },
    { title: "Start Time", name: "timeStart", type: "string" },
    { title: "End Time", name: "timeEnd", type: "string" },
    { 
      title: "Level", 
      name: "level", 
      type: "string",
      options: {
        list: [ "Beginner", "Intermediate", "Advanced" ]
      }
    },
    { title: "Location", name: "location", type: "string" },
    { title: "Cost", name: "cost", type: "string" },
  ],
}
