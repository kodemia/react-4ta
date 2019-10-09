import React from 'react'

import Navbar from '../components/Navbar'
import NewPostForm from '../components/NewPost'

import api from '../lib/api'

function NewPost(props) {
  const savePost = async (post) => {
    await api.createPost(post)

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
