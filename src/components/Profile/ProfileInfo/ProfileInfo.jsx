import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import previuPicture from '../../../assets/img/Nature_Beach_Paradise_Beach_011272_.jpg'
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) =>{
    if(props.profile===null||props.profile===undefined){
        return <Preloader/>
    }

    return (
        <div className={s.profileItem}>
            {/*<div className={s.previu}>*/}
            {/*    <img*/}
            {/*        src={previuPicture}></img>*/}
            {/*</div>*/}
            <div className={s.aboutme}>
                <img className={s.avatar} src={props.profile.photos.small}></img>

               <ProfileStatus status={"Hello my friends"}/>
                <span> ABOUT ME: {props.profile.aboutMe}</span>
            </div>
            <div>
                <span>My contacts: VK: {props.profile.contacts.vk}</span>
            </div>
        </div>

    )
}

export default ProfileInfo;