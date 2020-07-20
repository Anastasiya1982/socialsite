import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps=(state)=>{
    return{
        posts:state.profilePage.posts,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(newMyPostText)=>{
           dispatch(addPostActionCreator(newMyPostText));
        },
        }
}

const  MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;