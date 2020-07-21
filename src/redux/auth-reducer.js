import React from "react";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS="GET_CAPTCHA_URL_SUCCESS";


let initialState={
    id:null,
    email:null,
    login :null,
    isAuth:false,
    captchaUrl:null   // if null, the captcha is not required;
};

 const authReducer=(state=initialState,action)=>{
     switch (action.type) {
         case SET_USER_DATA:
         case  GET_CAPTCHA_URL_SUCCESS: {
             return {
                 ...state,
                 ...action.payload
             }
         }
         default:
             return state;
     }
 }

// action

 export const setAuthUserData=(id,email,login,isAuth)=>({ type:SET_USER_DATA,
       payload:{id,email,login,isAuth}});

export const getCaptchaUrlSuccess=(captchaUrl)=>({ type:GET_CAPTCHA_URL_SUCCESS,payload:{captchaUrl}});

//создаем thunkAC
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }

}
export const login = (email, password, rememberMe,captcha) => async (dispatch) => {
   let response = await authAPI.login(email, password, rememberMe,captcha) ;
            if (response.data.resultCode === 0) {
                //if success get auth user data
                dispatch(getAuthUserData());
            }else {
                  if(response.data.resultCode===10) {
                     dispatch(getCaptchaUrl());
                  }
                  let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                  dispatch(stopSubmit("login", {_error: message}));
            }
}

export const logout=()=>async (dispatch)=>{
    let response=await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))
            }
}
export const getCaptchaUrl= () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl=response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
 }


export default authReducer;