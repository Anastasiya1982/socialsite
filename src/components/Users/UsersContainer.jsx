import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
} from "../../redux/users-reducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer  extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
                this.props.toggleIsFetching(false);

            });
    }

    onCurrentPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false)
            });
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
        isFetching:state.usersPage.isFetching
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
//         }
//     }
// }

export default connect(mapStateToProps,{ follow, unfollow, setUsers,setCurrentPage,setUsersTotalCount,toggleIsFetching}
)(UsersContainer);