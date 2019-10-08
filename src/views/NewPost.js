import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import NewPostForm from '../components/NewPost'

import api from '../lib/api'

class NewPost extends Component {
  async savePost(post) {
    const savedPost = await api.createPost(post)

    // eslint-disable-next-line
    console.log(savedPost);
  }

  render() {
    return (
      <div className='new-post'>
        <Navbar />
        <section className="container">
          <NewPostForm
            onSubmit={this.savePost}
          />
        </section>
      </div>
    )
  }
}

export default NewPost
