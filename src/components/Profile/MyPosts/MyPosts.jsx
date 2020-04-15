import React from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{
    let postsElement= props.posts.map(p=>(<Post massage={p.message} like={p.like}/>));
    return  (
        <div className={s.postwrapp}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;