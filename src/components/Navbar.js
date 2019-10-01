import React from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'
import NavbarToggler from './NavbarToggler'

import NavbarNav from './NavbarNav'
import NavbarNavItem from './NavbarNavItem'
import NavbarNavLink from './NavbarNavLink'

import DropdownMenu from './DropdownMenu'
import DropdownMenuItem from './DropdownMenuItem'

function Navbar() {
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
              to="/home"
              text="Home"
              label="go to home page (current)"
            />
          </NavbarNavItem>
          <NavbarNavItem>
            <NavbarNavLink
              to="/link"
              text="Link"
              label="go to link page"
            />
          </NavbarNavItem>
          <NavbarNavItem dropdown>
            <NavbarNavLink
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              text="Dropdown"
              dropdownToggle
            />
            <DropdownMenu ariaLabelledBy="dropdownmenu">
              <DropdownMenuItem
                to="/action"
                text="action"
              />

              <DropdownMenuItem
                to="/another-action"
                text="Another action"
              />

              <div className="dropdown-divider"/>

              <DropdownMenuItem
                to="/something-else-here"
                text="Something else here"
              />
            </DropdownMenu>
          </NavbarNavItem>
          <NavbarNavItem>
            <NavbarNavLink
              className="nav-link disabled"
              to="/disabled"
              tabIndex="-1"
              aria-disabled="true"
              text="Disabled"
            />
          </NavbarNavItem>
        </NavbarNav>

        <form
          className="form-inline my-2 my-lg-0"
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </NavbarCollapse>
    </nav>
  )
}

export default Navbar
