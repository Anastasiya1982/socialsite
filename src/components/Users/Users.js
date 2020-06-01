import React from "react";
import s from './Users.module.css';


let Users=(props)=>{
    if (props.users.length===0) {
        props.setUsers([
                {
                    id: 1, photoUrl: 'https://sun9-28.userapi.com/c637625/v637625419/b95a/3mIndGkkUTs.jpg',
                    followed: true, fullName: "Katya", status: "friend", location:
                        {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2, photoUrl: "https://pp.userapi.com/c638430/v638430295/32c31/C4J0O_w4ewk.jpg",
                    followed: true, fullName: "Dmitriy", status: "friend", location:
                        {city: "Vitebsk", country: "Belarus"}
                },
                {
                    id: 3, photoUrl: 'https://sun9-28.userapi.com/c637625/v637625419/b95a/3mIndGkkUTs.jpg',
                    followed: false, fullName: "Svetlana", status: "new", location:
                        {city: "Varshava", country: "Poland"}
                },
                {
                    id: 4,
                    photoUrl: 'https://avatars.mds.yandex.net/get-pdb/195449/6eec6f67-e740-457e-9eb7-34bcde2f7082/s1200?webp=false',
                    followed: false,
                    fullName: "Olga",
                    status: "new",
                    location:
                        {city: "Moskow", country: "Russia"}
                },

            ]
        )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <div className={s.userItem}>
                        <div className={s.usersImg}>
                            <div>
                                <img className={s.usersPhoto} src={u.photoUrl}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>UnFollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}

                            </div>
                        </div>
                        <div className={s.userInfo}>

                            <div>
                                <span>{u.fullName}</span>
                                <span>{u.status}</span>
                            </div>
                            <div>
                                <span>{u.location.country}</span>
                                <span>{u.location.city}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
    </div>
}
export default Users;