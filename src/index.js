 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

 let posts =[
     {id:1, message:"Hi! How are you?",like:5},
     {id:2, message:"It's my first post", like:12},
 ];
 let dialogs=[
     {id:1,name:"Dimych"},
     {id:2,name:"Andrey"},
     {id:3,name:"Viktor"},
     {id:4,name:"Sasha"},
     {id:5,name:"Valera"},
     {id:6,name:"Ihor"}
 ];
 let messages =[
     {id:1, message:"Hi"},
     {id:2, message:"How are you?"},
     {id:3, message:"I want to meet with you?"},
     {id:4, message:"Lets go for a walk"}
 ];



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
