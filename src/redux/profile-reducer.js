import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const ADD_POST="ADD-POST";
const SET_USER_PROFILE="SET_USER_PROFILE";
const SET_STATUS="SET-STATUS";
const DELETE_POST="DELETE-POST";
const SAVE_PHOTO_SUCCESS="SAVE_PHOTO_SUCCESS";

let initialState={
    posts: [
        {id: 1, message: "Hi! How are you?", like: 5},
        {id: 2, message: "It's my first post", like: 12},

    ],

    profile: null,
    status:'',
};

 const  profileReducer=(state=initialState,action)=>{
     switch (action.type) {
         case ADD_POST: {
             let newPost = {
                 id: 5,
                 message: action.newMyPostText,
                 like: 0
             };
             return {
                 ...state,
                 posts: [...state.posts, newPost],

             }
         }
        case SET_USER_PROFILE:{
             return {
                 ...state,
                 profile:action.profile
             }
         }
         case SET_STATUS:{
             return {
                 ...state,
                 status:action.status
             }
         }
         case DELETE_POST:{
             return {
                 ...state,
                 posts:state.posts.filter(p=>p.id!==action.postId)
             }
         }
         case SAVE_PHOTO_SUCCESS:{
             return {
                 ...state,
                profile: {...state.profile,photos:action.photos}
             }
         }
         default:
             return state;
     }
 }

export const addPostActionCreator=(newMyPostText)=>({ type:ADD_POST,newMyPostText});
export  const setStatusAC=(status)=>({type:SET_STATUS,status});
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE,profile});
export  const deletePost=(postId)=>({type:DELETE_POST,postId});
export const savePhotoSuccess=(photos)=>({type:SAVE_PHOTO_SUCCESS,photos});



//создаем  thunkCreator для получения профилей юзеров
export const getUserProfile=(userId)=>async (dispatch)=>{
    let response = await usersAPI.getProfile(userId);
           dispatch(setUserProfile(response.data));
}

export const getStatus=(userId)=>async (dispatch)=>{
   let response=await profileAPI.getStatus(userId);
            dispatch(setStatusAC(response.data));
}

export const updateStatus=(status)=>async (dispatch)=>{
   let response=await profileAPI.updateStatus(status);
            if(response.data.resultCode===0) {
                dispatch(setStatusAC(status));
            }
}

export const saveMainPhoto=(file)=>async (dispatch)=>{
    let response=await profileAPI.savePhoto(file);
    if(response.data.resultCode===0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const  saveProfile =(profile)=> async (dispatch,getState)=> {
    const userId=getState().auth.id;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }else{
        dispatch(stopSubmit("edit-profile", {_error:response.data.messages[0] }));
            // {"contacts": {"facebook": response.data.messages[0]}

        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;