import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      
      <div>{props.name}</div>
     
      <img src='https://sun9-74.userapi.com/impg/TEBk54BQFZEgPjGpP8W18qgXbv3IegKMCVqfhA/xLgLcaOBh3g.jpg?size=604x427&quality=96&sign=2419745b482ac7e5d12f88f10c3a36a8&type=album'></img>
     
      {props.message}
      <div>
        <span>likes - {props.likes}</span>
      </div>
    </div>


  )
}

export default Post;