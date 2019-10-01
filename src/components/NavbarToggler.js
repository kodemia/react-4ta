import React from 'react'

function NavbarToggler(props) {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      aria-expanded="false"
      data-target={props.dataTarget}
      aria-controls={props.ariaControls}
      aria-label={props.ariaLabel}
    >
      <span className="navbar-toggler-icon" />
    </button>
  )
}

export default NavbarToggler
