import React from 'react'

function NavbarNavLink(props) {
  const {
    to,
    dropdownToggle,
    text,
    label,
    disabled,
    ...cleanProps
  } = props

  const styles = ['nav-link']

  if (dropdownToggle) styles.push('dropdown-toggle')
  if (disabled) styles.push('disabled')

  const className = styles.join(' ')

  return (
    <a
      className={className}
      href={to}
      {...cleanProps}
    >
      { text }
      <span className="sr-only">
        { label }
      </span>
    </a>
  )
}

export default NavbarNavLink
