import React from 'react'

function NavbarNavItem(props) {
  const styles = ['nav-item']

  if (props.active) styles.push('active')
  if (props.dropdown) styles.push('dropdown')

  const className = styles.join(' ')

  return (
    <li className={className}>
      { props.children }
    </li>
  )
}

export default NavbarNavItem
