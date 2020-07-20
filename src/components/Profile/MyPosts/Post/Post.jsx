import React from 'react';
import  s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://s1.1zoom.ru/b5050/289595-frederika_300x225.jpg' alt='frederica'></img>
            {props.massage}
            <div>
                <span> likes </span>{props.like}
            </div>
        </div>
    )
}
export default Post;