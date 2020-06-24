import React from 'react';
import Profile from "../Profile";
import * as axios from "axios";
import {getUserProfile, setUserProfile} from "../../../redux/profile-reducer";
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
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps=(state)=>{
    return {
        profile:state.profilePage.profile
    }
}

export default compose(
    connect (mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);


// let AuthRedirectComponent=withAuthRedirect(ProfileContainer);
//

// let WithUrlDataComponent = withRouter(AuthRedirectComponent);
// export default  connect (mapStateToProps, {getUserProfile})(WithUrlDataComponent);