import s from './MyPosts.module.css';
import Post from './Post/Post'

let postData =
    [
        {id: 1, message: 'Привет это первое сообщение', likesCount: 12},
        {id: 2, message: 'Это второе сообщение здесь', likesCount: 11},
        {id: 3, message: 'Жаль сообщения не берутся из базы', likesCount: 110}
    ]

const MyPosts = () => {
  return (
    <div>
      <h2>MyPosts</h2>
      
      <div className={s.posts}>
        {postData.map(post =>(<Post message = {post.message} likes = {post.likesCount}/>))}
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