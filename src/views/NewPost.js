import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import NewPostForm from '../components/NewPost'

class NewPost extends Component {
  render() {
    return (
      <div className='new-post'>
        <Navbar />
        <section className="container">
          <NewPostForm />
        </section>
      </div>
    )
  }
}

export default NewPost
