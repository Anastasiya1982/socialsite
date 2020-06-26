import React from 'react';
import Profile from "../Profile";
import * as axios from "axios";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId=this.props.match.params.userId;
        if(!userId){
            userId=2
        }
       this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                                     updateStatus={this.props.updateStatus}
            />
        )
    }
}
let mapStateToProps=(state)=>{
    return {
        profile:state.profilePage.profile,
        status:state.profilePage.status
    }
}

export default compose(
    connect (mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRouter
)(ProfileContainer);


// let AuthRedirectComponent=withAuthRedirect(ProfileContainer);
//

// let WithUrlDataComponent = withRouter(AuthRedirectComponent);
// export default  connect (mapStateToProps, {getUserProfile})(WithUrlDataComponent);