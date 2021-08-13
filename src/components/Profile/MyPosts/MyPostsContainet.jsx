import s from './MyPosts.module.css';
import Post from './Post/Post';
import React, { Component } from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
import MyPosts from './MyPosts';



const MyPostsContainet = (props) => {
    let postElements = 
    props.postData.map(post => (<Post message={post.message} likes={post.likesCount} />))
  
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostTextActionCreator(text);
    props.dispatch(updateNewPostTextActionCreator(text));

  }
  
  return (
    <MyPosts updateNewPostText = {onPostChange} addPost={addPost} />
  )
}

export default MyPostsContainet;