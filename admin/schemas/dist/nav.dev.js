"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: "Navigation Links",
  name: "nav",
  type: "object",
  // __experimental_actions: ["update", "publish" /* 'create', 'delete' */],
  fields: [{
    title: "Page Name",
    name: "name",
    type: "string"
  }, {
    title: "Relative Path",
    name: "path",
    type: "string"
  }, {
    title: "Hidden",
    name: "hide",
    type: "boolean"
  }]
};
exports["default"] = _default;