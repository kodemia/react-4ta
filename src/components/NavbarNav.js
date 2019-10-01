import React from 'react'

function NavbarNav(props) {
  return (
    <ul className="navbar-nav mr-auto">
      { props.children }
    </ul>
  )
}

export default NavbarNav
