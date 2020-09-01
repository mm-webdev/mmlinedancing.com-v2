import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

// My schema types below
import nav from "./nav"
import socials from "./socials"
import settings from "./settings"
import timetable from "./timetable"
import dances from "./dances"
import dayAndTime from "./dayAndTime"
import testDayAndTime from "./testDayAndTime"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    settings,
    timetable,
    dances,
    nav,
    socials,
    dayAndTime,
    testDayAndTime
  ]),
})
