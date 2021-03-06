import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress, getUsersThunkCreator,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer  extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onCurrentPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
    }

    render() {
           return <>
               {this.props.isFetching
                   ?<Preloader/>
                   :null}
               <Users totalUsersCount={this.props.totalUsersCount}
               currentPage={this.props.currentPage}
               users={this.props.users}
               pageSize={this.props.pageSize}
               onCurrentPageChanged={this.onCurrentPageChanged}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               followingInProgress={this.props.followingInProgress}
             />
        </>
    }
}

let mapStateToProps = (state)=>{
    return{
        users:getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurrentPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
    }
}



export default compose(
    connect(mapStateToProps,{ follow, unfollow,
        setCurrentPage,toggleFollowingProgress,
        getUsers:getUsersThunkCreator})
)(UsersContainer);
