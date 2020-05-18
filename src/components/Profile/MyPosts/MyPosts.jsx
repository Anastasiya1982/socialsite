import React from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{
    let postsElement=
        props.posts.map(p=>(<Post massage={p.message} like={p.like}/>));

    let newPostElement = React.createRef();

    let addPost =()=>{
       let text = newPostElement.current.value;
       props.addPost(text);
       newPostElement.current.value = "";
   }

    return  (
        <div className={s.postwrapp}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref = { newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;