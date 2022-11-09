import './Posts.css'
import Post from '../post/Post'
import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <>
      <div className='post-wrapper'>
        <div className='posts'>
          <Link className='link' to='/post/:postid'><Post /></Link>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  )
}
