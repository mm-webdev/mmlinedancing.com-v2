"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TimePicker = _interopRequireDefault(require("../components/TimePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var _default = {
  name: "testDayAndTime",
  title: "Day and Time",
  type: "object",
  fields: [{
    name: "day",
    title: "Day",
    type: "string",
    description: "Select day of week",
    options: {
      list: days
    }
  }, {
    name: "opensAt",
    title: "Start time",
    type: "string",
    description: "Choose what time the class starts",
    inputComponent: _TimePicker["default"]
  }, {
    name: "closesAt",
    title: "End time",
    type: "string",
    description: "Choose what time the class ends",
    inputComponent: _TimePicker["default"]
  }],
  preview: {
    select: {
      day: "day",
      opensAt: "opensAt",
      closesAt: "closesAt"
    },
    prepare: function prepare(_ref) {
      var day = _ref.day,
          opensAt = _ref.opensAt,
          closesAt = _ref.closesAt;
      return {
        title: "".concat(day),
        subtitle: "".concat(opensAt, " to ").concat(closesAt)
      };
    }
  }
};
exports["default"] = _default;