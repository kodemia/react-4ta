import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import Navbar from '../components/Navbar'
import NewPostForm from '../components/NewPost'

import api from '../lib/api'

function NewPost(props) {
  const [state, setState] = useState({ author: ''})

  useEffect(() => {
    const token = sessionStorage.getItem('token')

    if (!token) {
      props.history.push('/login')

      return
    }

    const validateSession = async () => {
      const { name } = await api.validateSession()

      if (name !== state.author) {
        setState({ ...state, author: name })
      }
    }

    validateSession()
  }, [props, state])

  const savePost = async (post) => {
    await api.createPost({
      ...post,
      author: state.author
    })

    props.history.push('/')
  }

  return (
    <div className='new-post'>
      <Navbar />
      <section className="container">
        <NewPostForm
          onSubmit={savePost}
        />
      </section>
    </div>
  )
}

export default NewPost
