import React from 'react'

function Button(props) {
  const styles = ['btn my-2 my-sm-0']

  if (props.btnClass) styles.push(props.btnClass)

  const className = styles.join(' ')

  return (
    <button
      className={className}
      type={props.type}
    >
      { props.text }
    </button>
  )
}

export default Button
