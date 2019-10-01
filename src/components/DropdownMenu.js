import React from 'react'

function DropdownMenu(props) {
  return (
    <div
      className="dropdown-menu"
      aria-labelledby={props.ariaLabelledBy}
    >
      { props.children }
    </div>
  )
}

export default DropdownMenu
