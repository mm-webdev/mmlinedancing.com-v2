"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _schemaCreator = _interopRequireDefault(require("part:@sanity/base/schema-creator"));

var _schemaType = _interopRequireDefault(require("all:part:@sanity/base/schema-type"));

var _nav = _interopRequireDefault(require("./nav"));

var _socials = _interopRequireDefault(require("./socials"));

var _settings = _interopRequireDefault(require("./settings"));

var _timetable = _interopRequireDefault(require("./timetable"));

var _dances = _interopRequireDefault(require("./dances"));

var _dayAndTime = _interopRequireDefault(require("./dayAndTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// My schema types below
var _default = (0, _schemaCreator["default"])({
  name: "default",
  types: _schemaType["default"].concat([_settings["default"], _timetable["default"], _dances["default"], _nav["default"], _socials["default"], _dayAndTime["default"]])
});

exports["default"] = _default;