import s from "../components/Users/Users.module.css";
import React from "react";

const FOLLOW="FOLLOW";
const UNFOLLOW="UNFOLLOW";
const SET_USERS="SET_USERS";
const SET_CURRENTPAGE="SET_CURRENTPAGE";
const SET_USERS_TOTAL_COUNT="SET_USERS_TOTAL_COUNT";
const TOOGLE_IS_FETCHING= "TOOGLE_IS_FETCHING";

let initialState={
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:false
};

 const  usersReducer=(state=initialState,action)=>{
     switch (action.type) {
         case FOLLOW:
           return {
               ...state,
               users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: true}
                   }
                   return u;
               })
           }
         case UNFOLLOW:
             return{
                 ...state,
                 users: state.users.map(u=>{
                     if(u.id===action.userId){
                         return{...u,followed:false}
                     }
                     return u;
                 })

             }
         case SET_USERS:
             return{
                 ...state,
                 users: action.users
             }
         case SET_CURRENTPAGE:
             return{
                 ...state,
                currentPage: action.currentPage
             }
         case SET_USERS_TOTAL_COUNT:
             return {
                 ...state,
                 totalUsersCount: action.count
             }
         case TOOGLE_IS_FETCHING:
             return {
                 ...state,
                 isFetching: action.isFetching
             }

         default:
             return state;
     }
 }
export const follow=(userId)=>({ type:FOLLOW,userId});
export const unfollow=(userId)=>({type:UNFOLLOW ,userId});
export const setUsers=(users)=>({type:SET_USERS,users});
export const setCurrentPage= (currentPage)=>({ type:SET_CURRENTPAGE,currentPage});
export const setUsersTotalCount=(totalUsersCount)=>({ type:SET_USERS_TOTAL_COUNT, count:totalUsersCount});
export const toggleIsFetching=(isFetching)=>({type:TOOGLE_IS_FETCHING,isFetching});
export default usersReducer;