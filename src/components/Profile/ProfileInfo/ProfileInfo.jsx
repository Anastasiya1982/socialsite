import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) =>{
    if(props.profile===null||props.profile===undefined){
        return <Preloader/>
    }

    return (
        <div className={s.profileItem}>

            <div className={s.aboutme}>
                <img className={s.avatar} src={props.profile.photos.small}></img>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                <span> ABOUT ME: {props.profile.aboutMe}</span>
            </div>
            <div>
                <span>My contacts: VK: {props.profile.contacts.vk}</span>
            </div>
        </div>

    )
}

export default ProfileInfo;