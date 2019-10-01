import React from 'react'

function DropdownMenu(props) {
  const styles = ['dropdown-menu']

  if (props.active) styles.push('show')

  const className = styles.join(' ')

  return (
    <div
      className={className}
      aria-labelledby={props.ariaLabelledBy}
    >
      { props.children }
    </div>
  )
}

export default DropdownMenu
