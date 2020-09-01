import React from "react"
import PropTypes from "prop-types"
import { Timepicker } from "react-timepicker"
import { padStart } from "lodash"
import { withDocument } from "part:@sanity/form-builder"
import FormField from "part:@sanity/components/formfields/default"
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event"


// Transform hours and minutes to a formatted time string
const outgoingValue = (hours, minutes) =>
  `${padStart(hours, 2, "0")}:${padStart(minutes, 2, "0")}`

// Transform a formatted time string to hours and minutes
const incomingValues = value => {
  if (!value) {
    return {}
  }
  const [hours, minutes] = value.split(":")
  return {
    hours: Number(hours),
    minutes: Number(minutes),
  }
}

// Create a Sanity PatchEvent based on a change in time value
const createPatchFrom = value =>
  PatchEvent.from(value === "" ? unset() : set(value))

class TimeInput extends React.Component {
  // Declare shape of React properties
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }

  timeInput = React.createRef()

  // Called by the Sanity form-builder when this input should receive focus
  focus = () => {
    this.timeInput.current.focus()
  }

  // Function called whenever an editor changes a value
  handleTimeChange = (hours, minutes) => {
    const { onChange } = this.props
    if (Number.isInteger(hours) && Number.isInteger(minutes)) {
      const timeAsString = outgoingValue(hours, minutes)
      onChange(createPatchFrom(timeAsString))
    }
  }

  render = () => {
    const { type, value } = this.props
    const { hours, minutes } = incomingValues(value)
    return (
      // Use FormField if you want title and description rendered like any other input field
      <FormField label={type.title} description={type.description}>
        {/* Render Timepicker with hours, minutes and onChange callback function */}
        <Timepicker
          hours={hours}
          minutes={minutes}
          onChange={this.handleTimeChange}
          ref={this.timeInput}
          militaryTime={false}
        />
      </FormField>
    )
  }
}

export default withDocument(TimeInput)
