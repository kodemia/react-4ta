import React from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'
import NavbarToggler from './NavbarToggler'

import NavbarNav from './NavbarNav'
import NavbarNavItem from './NavbarNavItem'
import NavbarNavLink from './NavbarNavLink'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavbarBrand />

      <NavbarToggler
        dataTarget="navbar"
        ariaControls="#navbar"
        ariaLabel="navbar"
      />

      <NavbarCollapse id="navbar">
        <NavbarNav>
          <NavbarNavItem active>
            <NavbarNavLink
              to="/"
              text="All posts"
              label="go to home page with all posts"
            />
          </NavbarNavItem>

          <NavbarNavItem>
            <NavbarNavLink
              to="/new-post"
              text="Create post"
              label="go to create post page"
            />
          </NavbarNavItem>
        </NavbarNav>
      </NavbarCollapse>
    </nav>
  )
}

export default Navbar
