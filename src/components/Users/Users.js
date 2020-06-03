import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/man.png';


 class Users  extends React.Component{
     constructor(props) {
         super(props);
     }
     componentDidMount() {
         axios.get("https://social-network.samuraijs.com/api/1.0/users")
             .then(response => {
                 this.props.setUsers(response.data.items);
             });
     }

     render(){
         return <div>
             {
                this.props.users.map(u => <div key={u.id}>
                         <div className={s.userItem}>
                             <div className={s.usersImg}>
                                 <div>
                                     <img className={s.usersPhoto}
                                          alt="logo-Photo"
                                          src={u.photos.small != null ? u.photos.small : userPhoto}/>                                } />
                                 </div>
                                 <div>
                                     {u.followed
                                         ? <button onClick={() => {
                                             this.props.unfollow(u.id)
                                         }}>UnFollow</button>
                                         : <button onClick={() => {
                                             this.props.follow(u.id)
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
         </div>
     }
 }
export default Users;