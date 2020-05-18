import React from 'react';
import  s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) =>{
    let postsElement=
        props.posts.map(p=>(<Post massage={p.message} like={p.like}/>));

    let newPostElement = React.createRef();

    let addPost =()=>{
        props.dispatch({type:"ADD-POST"});
      // props.addPost();
   }
   let onPostChange =()=>{
       let text = newPostElement.current.value;
       let action={type: 'UPDATE-NEW-POST-TEXT',newText:text};
       props.dispatch(action);
       // props.updateNewPostText(text);
   }
    return  (
        <div className={s.postwrapp}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea  onChange={onPostChange} ref = { newPostElement}
                    value={props.newPostText}/>
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