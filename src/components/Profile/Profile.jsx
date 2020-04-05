import React from 'react';
import  s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return   <div className={s.content}>
        <div className={s.previu}>
            <img src="https://www.zastavki.com/pictures/1600x1200/2008/Nature_Beach_Paradise_Beach_011272_.jpg"></img>
        </div>
        <div className={s.aboutme}>
             <img className={s.logo} src="https://f0.pngfuel.com/png/606/660/orange-yellow-and-green-bird-illustration-png-clip-art.png"></img>
        </div>
        <MyPosts/>
    </div>
}

export default Profile;