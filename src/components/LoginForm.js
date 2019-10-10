import React, { useState } from 'react'

import FormInput from './FormInput'
import Button from './Button'

function LoginForm(props) {
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();

    if (props.onSubmit) props.onSubmit(state)
  }

  const onChange =(event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form
      className="login-form"
      onSubmit={onSubmit}
    >
      <FormInput
        id="email"
        name="email"
        placeholder="elbromas"
        aria-label="email for create session"
        label="Email"
        onChange={onChange}
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        placeholder="********"
        aria-label="password of the account"
        label="Contraseña"
        onChange={onChange}
      />

      <Button
        text="Iniciar Sesión"
        btnClass="btn-primary"
        type="submit"
      />
    </form>
  )
}

export default LoginForm
