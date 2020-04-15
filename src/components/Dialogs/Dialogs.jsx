import React from 'react';
import s from './Dialogs.module.css';
import Nav from "../Nav/Nav";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props)=>{

    let dialogs=[
        {id:1,name:"Dimych"},
        {id:2,name:"Andrey"},
        {id:3,name:"Viktor"},
        {id:4,name:"Sasha"},
        {id:5,name:"Valera"},
        {id:6,name:"Ihor"}
    ];

    let messages =[
        {id:1, message:"Hi"},
        {id:2, message:"How are you?"},
        {id:3, message:"I want to meet with you?"},
        {id:4, message:"Lets go for a walk"}
      ];

    let dialogsElements = dialogs.map( d=> (<DialogItem name={d.name} id = {d.id}/>));
    let messagesElements = messages.map( m =>(<Message message={m.message} /> ));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
              {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;