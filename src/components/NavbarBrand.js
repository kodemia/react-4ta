import React from 'react'

function NavbarBrand({ text, to }) {
  return (
    <a
      className="navbar-brand"
      href={ to }
    >
      { text }
    </a>
  )
}

export default NavbarBrand
