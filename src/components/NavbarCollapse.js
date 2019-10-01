import React from 'react'

function NavbarCollapse(props) {
  return (
    <div
      id={props.id}
      className="collapse navbar-collapse"
    >
      { props.children }
    </div>
  )
}

export default NavbarCollapse
