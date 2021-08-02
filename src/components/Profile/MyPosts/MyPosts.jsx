import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      MyPost

      <div>
        NewPost
      </div>

      <div className={s.posts}>
        
        <Post />
        <Post />
        <Post />

      </div>
    </div>


  )
}

export default MyPosts;