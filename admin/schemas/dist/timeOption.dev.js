"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: "timeOption",
  type: "object",
  fields: [{
    title: "Hour",
    name: "hr",
    type: "string",
    options: {
      list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    }
  }, {
    title: "Minute",
    name: "min",
    type: "string",
    options: {
      list: ["00", "15", "30", "45"]
    }
  }, {
    title: "AM / PM",
    name: "meridiem",
    type: "string",
    options: {
      list: ["AM", "PM"]
    }
  }]
};
exports["default"] = _default;