import React from 'react';
import s from './Message.module.css';

const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = ()=>{
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
        </div>
    )
}
export default Message;