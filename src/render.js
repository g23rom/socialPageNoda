import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost, updateNewPostText } from './redux/state'

let rerenderEntireTree = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state = {state}
        addPost = {addPost}
        updateNewPostText = {updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default rerenderEntireTree;