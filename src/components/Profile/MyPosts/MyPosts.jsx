import React from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () =>{
    return  (
    <div >  My posts
                  <div> New posts
                  </div>
                  <div className={s.posts}>
                     <Post massage ="Hi! How are you?"  like ="5" />
                     <Post massage = "It's my first post" like ="15"/>

                   </div>
                </div>
    )
}
export default MyPosts;