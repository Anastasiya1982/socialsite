import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return  <header className ={s.header}>
        <img src = "https://image.freepik.com/free-vector/eye-camera-logo_53295-268.jpg"/>
       <div className={s.loginBlock}>
           { props.isAuth? props.login
           : <NavLink to={'/login'} >Login</NavLink>}
      </div>
    </header>
}

export default Header;