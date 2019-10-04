import React, { Component } from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'
import NavbarToggler from './NavbarToggler'

import NavbarNav from './NavbarNav'
import NavbarNavItem from './NavbarNavItem'
import NavbarNavLink from './NavbarNavLink'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  toggleDropdownActive() {
    this.setState({ active: !this.state.active })
  }

  render() {
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
}

export default Navbar
