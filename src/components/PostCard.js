import React from 'react'

function PostCard (props) {
  const { title, description, date, image } = props
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard