// 1. Import the TimeInput react component
import TimeInput from '../components/TimeInput'

// 2. List of days the editor may choose from
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// 3. Validate function which is invoked on user input
const verifyInput = dayAndTime => {
  const {day, opensAt, closesAt} = dayAndTime
  if (!day) {
    return 'Please select a day'
  }
  if (!opensAt) {
    return 'Choose what time the class starts'
  }
  if (!closesAt) {
    return 'Choose what time the class finishes'
  }
  return opensAt < closesAt ? true : `Probably best to start the class before you finish it on ${day}.`
}

export default {
  name: 'dayAndTime',
  title: 'Day and Time',
  type: 'object',

  // 4. Perform validation
  validation: Rule => Rule.custom(verifyInput),

  fields: [
    {
      // 5. Enable editors to input a string from a predefined list (days)
      name: 'day',
      title: 'Day',
      type: 'string',
      description: 'Select day of week',
      options: {
        list: days
      }
    },
    {
      // 6. Enable editors to input a point in time using a custom input component
      name: 'opensAt',
      title: 'Start time',
      type: 'string',
      description: 'Choose what time the class starts',
      inputComponent: TimeInput
    },
    {
      // 7. Same time input as above, but assigned to a different field
      name: 'closesAt',
      title: 'End time',
      type: 'string',
      description: 'Choose what time the class ends',
      inputComponent: TimeInput
    }
  ],

  // 8. Define how the dayAndTime object will render in the Studio 
  preview: {
    select: {
      day: 'day',
      opensAt: 'opensAt',
      closesAt: 'closesAt'
    },
    prepare({day, opensAt, closesAt}) {
      return {
        title: day,
        subtitle: `${opensAt} - ${closesAt}`
      }
    }
  }
}