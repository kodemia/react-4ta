import React from 'react'
import { Link } from 'react-router-dom'

function PostCard (props) {
  const {
    title,
    description,
    date,
    image,
    id
  } = props

  return (
    <div
      className='card mb-3'
    >
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img
            src={ image }
            className='card-img'
            alt={ title }
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>
              { title }
            </h5>
            <p className='card-text'>
              { description }
            </p>

            <p className='card-text'>
              <small className='text-muted'>
                { date }
              </small>
            </p>

            <p className="card-text">
              <Link to={`/post/${id}`}>
                ver detalle
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
