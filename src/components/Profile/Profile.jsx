import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) =>{

     return (
        <div>
            <ProfileInfo saveMainPhoto={props.saveMainPhoto}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner} />
            <MyPostsContainer  />
        </div>
    )
}

export default Profile;