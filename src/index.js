import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';

let rerenderEntireTree = (state) =>{
    
ReactDOM.render(
    <React.StrictMode>
        <App 
            store = {store}
            state = {state}
            dispatch = {store.dispatch.bind(store)}
        />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
 
rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
});