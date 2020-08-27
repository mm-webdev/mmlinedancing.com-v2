"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TimeInput = _interopRequireDefault(require("../components/TimeInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 1. Import the TimeInput react component
// 2. List of days the editor may choose from
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // 3. Validate function which is invoked on user input

var verifyInput = function verifyInput(dayAndTime) {
  var day = dayAndTime.day,
      opensAt = dayAndTime.opensAt,
      closesAt = dayAndTime.closesAt;

  if (!day) {
    return 'Please select a day';
  }

  if (!opensAt) {
    return 'Choose what time the class starts';
  }

  if (!closesAt) {
    return 'Choose what time the class finishes';
  }

  return opensAt < closesAt ? true : "Probably best to start the class before you finish it on ".concat(day, ".");
};

var _default = {
  name: 'dayAndTime',
  title: 'Day and Time',
  type: 'object',
  // 4. Perform validation
  validation: function validation(Rule) {
    return Rule.custom(verifyInput);
  },
  fields: [{
    // 5. Enable editors to input a string from a predefined list (days)
    name: 'day',
    title: 'Day',
    type: 'string',
    description: 'Select day of week',
    options: {
      list: days
    }
  }, {
    // 6. Enable editors to input a point in time using a custom input component
    name: 'opensAt',
    title: 'Start time',
    type: 'string',
    description: 'Choose what time the class starts',
    inputComponent: _TimeInput["default"]
  }, {
    // 7. Same time input as above, but assigned to a different field
    name: 'closesAt',
    title: 'End time',
    type: 'string',
    description: 'Choose what time the class ends',
    inputComponent: _TimeInput["default"]
  }],
  // 8. Define how the dayAndTime object will render in the Studio 
  preview: {
    select: {
      day: 'day',
      opensAt: 'opensAt',
      closesAt: 'closesAt'
    },
    prepare: function prepare(_ref) {
      var day = _ref.day,
          opensAt = _ref.opensAt,
          closesAt = _ref.closesAt;
      return {
        title: day,
        subtitle: "".concat(opensAt, " - ").concat(closesAt)
      };
    }
  }
};
exports["default"] = _default;