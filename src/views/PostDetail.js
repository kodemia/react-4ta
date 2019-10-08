import React, { Component } from 'react'

import Navbar from '../components/Navbar'
import PostCard from '../components/PostCard'

import api from '../lib/api'

class PostDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      title: '',
      description: '',
      date: '',
      image: '',
      key: '',
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params

    const post = await api.getById(id)

    this.setState({
      ...post,
      id: post._id
    })
  }

  render() {
    return (
      <div className='post-detail'>
        <Navbar />
        <section className="container">
          <PostCard
            id={this.state.id}
            title={this.state.title}
            description={this.state.description}
            date={this.state.date}
            image={this.state.image}
            key={this.state.title}
          />
        </section>
      </div>
    )
  }
}

export default PostDetail
