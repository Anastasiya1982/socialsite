import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/img/man.png';
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (

        <div>
            {
                props.users.map(u => <div key={u.id}>
                        <div className={s.userItem}>
                            <div className={s.usersImg}>
                                <div>
                                    <NavLink to ={'/profile/' + u.id}>
                                        <img className={s.usersPhoto}
                                             alt="logo-Photo"
                                             src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {
                                            props.unfollow(u.id)
                                        }}>UnFollow</button>
                                        : <button onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow</button>
                                    }

                                </div>
                            </div>
                            <div className={s.userInfo}>

                                <div>
                                    <span>{u.name}</span>
                                    <span>{u.status}</span>
                                </div>
                                <div>
                                    <span>{"u.location.country"}</span>
                                    <span>{"u.location.city"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div>
                {
                    pages.map(p => {

                        return (
                            <span className={props.currentPage === p ? s.selectedPage : ''}
                                  onClick={(e) => {
                                      props.onCurrentPageChanged(p)
                                  }}
                            >{p}</span>
                        )
                    })
                }

            </div>
        </div>
    )

}
export default Users;