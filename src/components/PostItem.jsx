import React from 'react'
import MYButton from './UI/button/MYButton'

const PostItem = (props) => {
  return (
    <div>
      <div className='post'>
        <div className='post__content'>
          <h3>{props.post.id}.  {props.post.title}</h3>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post__btns'>
          <MYButton onClick={() => props.remove(props.post)}> Delete</MYButton>
        </div>
      </div>
    </div>
  )
}

export default PostItem