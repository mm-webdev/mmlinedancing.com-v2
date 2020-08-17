import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// My schema types below
import nav from './nav'
import socials from './socials'
import settings from './settings'
import timetable from './timetable'
import dances from './dances'

export default createSchema({
  name: 'development',
  types: schemaTypes.concat([
    {
      nav,
      socials,
      settings,
      timetable,
      dances
    }
  ])
})
