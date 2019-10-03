
import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import PostCardList from '../components/PostCardList'

class Index extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
    const response = await fetch('http://localhost:8080/posts')
    const jsonBody = await response.json()

    const { posts } = jsonBody.data

    this.setState({ posts })
  }

  render() {
    return (
      <main>
        <Navbar />

        <PostCardList
          posts={this.state.posts}
        />
      </main>
    )
  }
}

export default Index
