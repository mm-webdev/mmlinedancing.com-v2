import React from "react"
import Cleave from "cleave.js/react"
import { withDocument } from "part:@sanity/form-builder"
import FormField from "part:@sanity/components/formfields/default"
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event"
import PropTypes from "prop-types"

const createPatchFrom = value =>
  PatchEvent.from(value === "" ? unset() : set(value))

class TimeCleave extends React.Component {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  timeCleave = React.createRef()

  onTimeFieldChange = event => {
    const { onChange } = this.props
    const timeAsString = event.target.value
    onChange(createPatchFrom(timeAsString))
  }

  render = () => {
    const { type, value } = this.props
    return (
      <FormField label={type.title} description={type.description}>
        <Cleave
          placeholder="h:mm am/pm"
          value={value}
          options={({ time: true }, { timeFormat: "12" })}
          onChange={this.onTimeFieldChange}
        />
      </FormField>
    )
  }
}

export default withDocument(TimeCleave)
