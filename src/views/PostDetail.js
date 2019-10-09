import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import PostCard from '../components/PostCard'

import api from '../lib/api'

function PostDetail(props) {
  const [state, setState] = useState({
    id: '',
    title: '',
    description: '',
    date: '',
    image: '',
    key: '',
  })

  useEffect(() => {
    const getPost = async () => {
      const { id } = props.match.params

      const post = await api.getById(id)

      if (state.id !== post._id) {
        setState({
          ...post,
          id: post._id
        })
      }
    }

    getPost()
  }, [props, state])

  return (
    <div className='post-detail'>
      <Navbar />

      <section className="container">
        <PostCard
          id={state.id}
          title={state.title}
          description={state.description}
          date={state.date}
          image={state.image}
          key={state.title}
        />
      </section>
    </div>
  )
}

export default PostDetail
