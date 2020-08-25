export default {
  title: "Dance Steps",
  name: "dances",
  type: "document",
  fields: [
    { title: "Dance Name", name: "title", type: "string" },
    { title: "Choreographer", name: "choreographer", type: "string" },
    { title: "Song & Artist", name: "songartist", type: "string" },
    { 
      title: "Level", 
      name: "level", 
      type: "string",
      options: {
        list: [ "Beginner", "Intermediate", "Advanced" ]
      }
    },
    { title: "File Upload", name: "file", type: "file", desc: "Use this to upload files for dance steps etc." },
    { title: "Youtube Link", name: "youtube", type: "string" },
  ],
}
