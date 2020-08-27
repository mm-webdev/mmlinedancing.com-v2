"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: "Timetable",
  name: "timetable",
  type: "document",
  fields: [{
    title: "Class Name",
    name: "title",
    type: "string"
  }, {
    title: 'Day and Time',
    name: 'scheduledDayAndTime',
    type: 'array',
    of: [{
      type: 'dayAndTime'
    }]
  }, {
    title: "Level",
    name: "level",
    type: "string",
    options: {
      list: ["Beginner", "Intermediate", "Advanced"]
    }
  }, {
    title: "Location",
    name: "location",
    type: "string"
  }, {
    title: "Cost",
    name: "cost",
    type: "string"
  }]
};
exports["default"] = _default;