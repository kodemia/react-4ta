import React from 'react'

import { Link } from 'react-router-dom'

function NavbarNavLink(props) {
  const {
    to,
    dropdownToggle,
    text,
    label,
    disabled,
    onClick,
    ...cleanProps
  } = props

  const styles = ['nav-link']

  if (dropdownToggle) styles.push('dropdown-toggle')
  if (disabled) styles.push('disabled')

  const className = styles.join(' ')

  return (
    <Link
      className={className}
      to={to}
      onClick={onClick}
      {...cleanProps}
    >
      { text }
      <span className="sr-only">
        { label }
      </span>
    </Link>
  )
}

export default NavbarNavLink
