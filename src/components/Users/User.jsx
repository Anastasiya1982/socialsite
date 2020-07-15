import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/img/man.png';
import {NavLink} from "react-router-dom";



let User = ({user,followingInProgress,unfollow,follow}) => {
    return <div>
        <div className={s.userItem}>
            <div className={s.usersImg}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.usersPhoto}
                             alt="logo-Photo"
                             src={user.photos.small != null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}

                        >UnFollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                    follow(user.id)
                                  }}>Follow</button>
                    }
                </div>
            </div>
            <div className={s.userInfo}>
                <div>
                    <span>{user.name}</span>
                    <span>{user.status}</span>
                </div>
                <div>
                    <span>{"u.location.country"}</span>
                    <span>{"u.location.city"}</span>
                </div>
            </div>
        </div>

        </div>

}
export default User;