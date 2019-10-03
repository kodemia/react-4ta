import React from 'react'

import PostCard from './PostCard'

function PostCardList (props) {
  const { posts } = props

  return (
    <section>
      {
        posts.map(post => (
          <PostCard
            title={post.title}
            description={post.description}
            date={post.date}
            image={post.image}
            key={post.title}
          />
        ))
      }
    </section>
  )
}

export default PostCardList
