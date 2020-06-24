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
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer  extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage,this.props.pageSize);
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setUsersTotalCount(data.totalCount);
        //         this.props.toggleIsFetching(false);
        //
        //     });
    }

    onCurrentPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber,this.props.pageSize);

        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.toggleIsFetching(false)
        //     });
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
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
};
// let mapDispatchToProps =(dispatch)=>{
//     return {
//         follow:(userId)=>{
//             dispatch(followAC(userId));
//         },
//         unfollow:(userId) =>{
//             dispatch(unfollowAC(userId));
//         },
//         setUsers:(users)=>{
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage:(pageNumber)=>{
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount:(totalCount)=>{
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching:(isFetching)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//         getUsers:(currentPage,pageSize)=>{
//                dispatch(getUsersThunkCreator(currentPage,pageSize))
//            }

//     }
// }
let withUsersRedirect=withAuthRedirect(UsersContainer);
export default connect(mapStateToProps,{ follow, unfollow, setCurrentPage,toggleFollowingProgress,getUsers:getUsersThunkCreator}
)(withUsersRedirect);