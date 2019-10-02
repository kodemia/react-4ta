import React, { Component } from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'
import NavbarToggler from './NavbarToggler'

import NavbarNav from './NavbarNav'
import NavbarNavItem from './NavbarNavItem'
import NavbarNavLink from './NavbarNavLink'

import DropdownMenu from './DropdownMenu'
import DropdownMenuItem from './DropdownMenuItem'

import FormInput from './FormInput'
import FormCheckbox from './FormCheckbox'
import Button from './Button'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      options: [
        { to: '/action', text: 'Action'},
        { to: '/another-action', text: 'Another action'},
        { divider: true },
        { to: '/something-else-here', text: 'Something else here'}
      ]
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
                onClick={this.toggleDropdownActive.bind(this)}
              />

              <DropdownMenu
                ariaLabelledBy="dropdownmenu"
                active={this.state.active}
              >
                { this.state.options.map((option) => (
                    !option.divider ? (
                      <DropdownMenuItem
                        to={option.to}
                        text={option.text}
                      />
                    ) : (
                      <div className="dropdown-divider"/>
                    )
                  ))}
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

          <form className="form-inline my-2 my-lg-0">
            <FormCheckbox
              id="looky"
              label="Tendré suerte?"
            />
            <FormInput
              type="search"
              placeholder="Search"
              ariaLabel="Search"
            />
            <Button
              btnClass="btn-outline-success"
              type="submit"
              text="search"
            />
          </form>
        </NavbarCollapse>
      </nav>
    )
  }
}

export default Navbar
