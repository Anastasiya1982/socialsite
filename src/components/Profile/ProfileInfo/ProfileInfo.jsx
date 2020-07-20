import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/userFoto.png";



const ProfileInfo = ({profile,status,updateStatus,isOwner,saveMainPhoto}) =>{

    if(!profile){
        return <Preloader/>
    }
    const onMainPhotoSelected=(e)=>{
        if(e.target.files.length){
            saveMainPhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profileItem}>

            <div className={s.aboutme}>
                <img className={s.avatar} src={profile.photos.small || userPhoto}></img>
                {isOwner&&<input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <span> ABOUT ME: {profile.aboutMe}</span>
            </div>
            <div>
                <span>My contacts: VK: {profile.contacts.vk}</span>
            </div>
        </div>

    )
}

export default ProfileInfo;