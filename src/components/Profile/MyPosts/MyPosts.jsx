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
        
        <Post name = 'Roman' message = 'Привет, как дела' likes = '15'/>
        <Post name = 'Вася' message = 'Всё ок' likes = '25'/>
        <Post name = 'Коля' message = 'И у меня тоже всё ок!' likes = '1'/>

      </div>
    </div>


  )
}

export default MyPosts;