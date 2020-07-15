import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <User key={u.id} user={u}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow} unfollow={props.unfollow}/>
                )
            }
            <Paginator currentPage={props.currentPage} onCurrentPageChanged={props.onCurrentPageChanged}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>


        </div>
    )
}
export default Users;