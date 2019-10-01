import React from 'react'

function DropdownMenuItem(props) {
  return (
    <a
      className="dropdown-item"
      href={props.to}
    >
      { props.text }
    </a>
  )
}

export default DropdownMenuItem
