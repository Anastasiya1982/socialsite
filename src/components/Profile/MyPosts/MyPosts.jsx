import React from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) =>{
     let postsElement=
        props.posts.map(p=>(<Post massage={p.message} like={p.like}/>));

    let onAddPost =()=>{
        props.addPost();
   }
   let onPostChange =(e)=>{
       let text = e.currentTarget.value;
        props.updateNewPostText(text);
   }
    return  (
        <div className={s.postwrapp}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea  onChange={onPostChange}
                    value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;