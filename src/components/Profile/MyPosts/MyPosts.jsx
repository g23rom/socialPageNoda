import s from './MyPosts.module.css';
import Post from './Post/Post';
import React, { Component } from 'react';


const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  }

  return (
    <div>
      <h2>MyPosts</h2>

      <div className={s.posts}>
        {props.postData.map(post => (<Post message={post.message} likes={post.likesCount} />))}
      </div>

      <div>
        <textarea
          className={s.textarea}
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText} />
      </div>

      <div>
        <button
          className={s.button}
          onClick={addPost}>NewPost
         </button>
      </div>


    </div>


  )
}
export default MyPosts;