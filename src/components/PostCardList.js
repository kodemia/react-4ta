import React from 'react'

import PostCard from './PostCard'

function PostCardList (props) {
  const { posts } = props

  return (
    <section>
      {
        posts.map(post => (
          <PostCard
            id={post._id}
            title={post.title}
            description={post.description}
            date={post.date}
            image={post.image}
            key={post._id}
          />
        ))
      }
    </section>
  )
}

export default PostCardList
