import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import NewPostForm from '../components/NewPost'

import api from '../lib/api'

class NewPost extends Component {
  async savePost(post) {
    await api.createPost(post)

    this.props.history.push('/')
  }

  render() {
    return (
      <div className='new-post'>
        <Navbar />
        <section className="container">
          <NewPostForm
            onSubmit={this.savePost.bind(this)}
          />
        </section>
      </div>
    )
  }
}

export default NewPost
