import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/userFoto.png";
import ProfileDataForm from "./ProfileDataForm";




const ProfileInfo = ({profile,status,updateStatus,isOwner,saveMainPhoto, saveProfile}) =>{

    const [editMode,setEditMode]=useState(false);

    if(!profile){
        return <Preloader/>
    }
    const onMainPhotoSelected=(e)=>{
        if(e.target.files.length){
            saveMainPhoto(e.target.files[0])
        }
    }
   const  toEditMode=()=>{
        setEditMode(true)
    }

    const onSubmit = (formData) => {
            saveProfile(formData).then(
                ()=>{
                    setEditMode(false);
                } );
    }



    return (
        <div className={s.profileItem}>

            <div className={s.aboutme}>
                <img className={s.avatar} src={profile.photos.small || userPhoto} alt={"smallLogo"}></img>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile}
                                       profile={profile}
                                       onSubmit={onSubmit}
                    />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={toEditMode}/>
                }

            </div>
            <div>
            </div>
        </div>

    )
}

export const ProfileData=({profile,isOwner,goToEditMode})=>{
    return    <div>
        { isOwner  &&  <div> <button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>FullName</b>:{profile.fullName}
        </div>
        <div>
            <b> Looking for a job</b> :{profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>:{profile.lookingForAJobDescription}
        </div>
        }
        <div><b>ABOUT ME</b>: {profile.aboutMe}
            <div>
                <b>My contacts:</b>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>

    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>:{contactValue}
    </div>

}

export default ProfileInfo;