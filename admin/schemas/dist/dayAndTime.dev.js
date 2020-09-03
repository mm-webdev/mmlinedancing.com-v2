"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports["default"] = void 0

var _md = require("react-icons/md")

var _TimeCleave = _interopRequireDefault(require("../components/TimeCleave"))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]
var _default = {
  name: "dayAndTime",
  title: "Day and Time",
  type: "object",
  icon: _md.MdAlarmAdd,
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
      inputComponent: _TimeCleave["default"],
      validation: function validation(Rule) {
        return [
          Rule.required()
            .regex(/^(1[0-2]|0?[1-9]):[0-5][0-9](am|pm)$/i, {
              name: "time",
              invert: false,
            })
            .error("Pattern: (h)h:mm am/pm"),
        ]
      },
    },
    {
      name: "closesAt",
      title: "End time",
      type: "string",
      inputComponent: _TimeCleave["default"],
      validation: function validation(Rule) {
        return [
          Rule.required()
            .regex(/^(1[0-2]|0?[1-9]):[0-5][0-9](am|pm)$/i, {
              name: "time",
              invert: false,
            })
            .error("Pattern: (h)h:mm am/pm"),
        ]
      },
    },
  ],
  preview: {
    select: {
      day: "day",
      opensAt: "opensAt",
      closesAt: "closesAt",
    },
    prepare: function prepare(_ref) {
      var day = _ref.day,
        opensAt = _ref.opensAt,
        closesAt = _ref.closesAt
      return {
        title: "".concat(day),
        subtitle: "".concat(opensAt, " to ").concat(closesAt),
      }
    },
  },
}
exports["default"] = _default
