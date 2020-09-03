"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _md = require("react-icons/md");

var _default = {
  title: "Classes",
  name: "timetable",
  type: "document",
  icon: _md.MdEventAvailable,
  fields: [{
    title: "Class Name",
    name: "title",
    type: "string",
    validation: function validation(Rule) {
      return Rule.required();
    }
  }, {
    title: "Day and Time",
    name: "scheduledDayAndTime",
    type: "array",
    of: [{
      type: "dayAndTime"
    }],
    description: "This records the class day and time. Please note you can have multiple days/times recorded here, they will all appear as though that class is on for both those days/times. You can delete any you don't need.",
    validation: function validation(Rule) {
      return [Rule.required().error("You need a day and time value."), Rule.unique().error("You have entered the same value twice, please delete one of these values, you only need it entered once.")];
    }
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
    title: "Location",
    name: "location",
    type: "string"
  }, {
    title: "Cost",
    name: "cost",
    type: "string"
  }, {
    title: "Class Notes",
    name: "notes",
    type: "text",
    description: "This will show on the timetable page if you have any class notes."
  }],
  preview: {
    select: {
      title: 'title',
      level: 'level'
    },
    prepare: function prepare(selection) {
      var title = selection.title,
          level = selection.level;
      return {
        title: title,
        subtitle: "Level: ".concat(level)
      };
    }
  }
};
exports["default"] = _default;