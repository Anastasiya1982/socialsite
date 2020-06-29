import {profileAPI, usersAPI} from "../api/api";

const ADD_POST="ADD-POST";
const SET_USER_PROFILE="SET_USER_PROFILE";
const SET_STATUS="SET-STATUS";

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
         }       case SET_STATUS:{
             return {
                 ...state,
                 status:action.status
             }
         }

         default:
             return state;
     }
 }
export const addPostActionCreator=(newMyPostText)=>({ type:ADD_POST,newMyPostText});
export  const setStatusAC=(status)=>({type:SET_STATUS,status});
export const setUserProfile=(profile)=>({type:SET_USER_PROFILE,profile});

//создаем  thunkCreator для получения профилей юзеров
export const getUserProfile=(userId)=>(dispatch)=>{
    usersAPI.getProfile(userId)
        .then(response => {
           dispatch(setUserProfile(response.data));
        });
}
export const getStatus=(userId)=>(dispatch)=>{
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data));
        });
}
export const updateStatus=(status)=>(dispatch)=>{
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode===0) {
                dispatch(setStatusAC(status));
            }
        });
}




export default profileReducer;