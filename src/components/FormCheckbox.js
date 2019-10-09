import React, { useState } from 'react'

function FormCheckbox(props) {
  const [state, setState] = useState(false)

  const toggleActive = () => {
    setState(!state)
  }

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={state}
        id={props.id}
        onChange={toggleActive}
      />
      { state.isActive && (
        <label
          className="form-check-label text-light"
          htmlFor={props.id}
        >
          { props.label }
        </label>
      )}
    </div>
  )
}

export default FormCheckbox
