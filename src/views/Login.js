import React from 'react'

import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'

import api from '../lib/api'

function Login(props) {
  const login = async ({ email, password }) => {
    const { token } = await api.login(email, password)

    sessionStorage.setItem('token', token)

    props.history.push('/new-post')
  }

  return (
    <div className='login'>
      <Navbar />
      <section className="container">
        <LoginForm
          onSubmit={login}
        />
      </section>
    </div>
  )
}

export default Login
