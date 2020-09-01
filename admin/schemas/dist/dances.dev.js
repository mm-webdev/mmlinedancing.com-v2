"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _md = require("react-icons/md");

var _default = {
  title: "Dance Steps",
  name: "dances",
  type: "document",
  icon: _md.MdQueueMusic,
  fields: [{
    title: "Dance Name",
    name: "title",
    type: "string",
    validation: function validation(Rule) {
      return Rule.required();
    }
  }, {
    title: "Choreographer",
    name: "choreographer",
    type: "string",
    validation: function validation(Rule) {
      return Rule.required();
    }
  }, {
    title: "Song & Artist",
    name: "songartist",
    type: "string"
  }, {
    title: "Level",
    name: "level",
    type: "string",
    options: {
      list: ["Beginner", "Intermediate", "Advanced"]
    },
    validation: function validation(Rule) {
      return Rule.required();
    }
  }, {
    title: "File Upload",
    name: "file",
    type: "file",
    desc: "Use this to upload files for dance steps etc."
  }, {
    title: "Youtube Link",
    name: "youtube",
    type: "url"
  }]
};
exports["default"] = _default;