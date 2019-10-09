import React, { useState } from 'react'

function FormInput(props) {
  const [state, setState] = useState('')

  const onChange = (event) => {
    setState(event.target.value)
    if (props.onChange) props.onChange(event)
  }

  return (
    <div className="form-group">
      <label htmlFor={props.id}>
        { props.label }
      </label>

      <input
        className="form-control"
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        aria-label={props.ariaLabel}
        aria-describedby={props.ariaDescribedBy}
        value={state}
        onChange={onChange}
      />
      {
        props.help && (
          <small
            id={props.id}
            className="form-text text-muted"
          >
            { props.help }
          </small>
        )
      }
    </div>
  )
}

export default FormInput
