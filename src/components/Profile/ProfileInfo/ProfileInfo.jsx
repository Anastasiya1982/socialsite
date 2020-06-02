import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/img/women.png'
const ProfileInfo = () =>{
    return (
        <div>
            <div className={s.previu}>
                <img
                    src="https://www.zastavki.com/pictures/1600x1200/2008/Nature_Beach_Paradise_Beach_011272_.jpg"></img>
            </div>
            <div className={s.aboutme}>
                <img className={s.logo}
                     src={userPhoto}></img>
            </div>

    </div>
    )
}

export default ProfileInfo;