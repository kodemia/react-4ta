
import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import PostCardList from '../components/PostCardList'

import api from '../lib/api'

class Index extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ''
    }
  }

  async componentDidMount () {
    try {
      const posts = await api.getPosts()

      this.setState({ posts })
    } catch (error) {
      this.setState({ hasError: true })
    }
  }

  render() {
    return (
      <main>
        <Navbar />

        {
          !this.state.hasError ? (
            <PostCardList
              posts={this.state.posts}
            />
          ) : (
            <div>
              <h1 className='title is-error'>
                Ups parece que algo salió mal al consultar al back :(
              </h1>
              <img
                src='data:image/jpeg;base64,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'
                alt='ups parece que algo salió mal'
              />
            </div>
          )
        }
      </main>
    )
  }
}

export default Index
