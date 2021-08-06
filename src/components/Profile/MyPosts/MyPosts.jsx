import s from './MyPosts.module.css';
import Post from './Post/Post'



const MyPosts = (props) => {
  
  return (
    <div>
      <h2>MyPosts</h2>
      
      <div className={s.posts}>
        {props.postData.map(post =>(<Post message = {post.message} likes = {post.likesCount}/>))}
      </div>

      <div>
        <textarea></textarea>
      </div>

      <div>
        <button>NewPost</button>
      </div>


    </div>


  )
}

export default MyPosts;