import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm, values} from "redux-form";



const Dialogs = (props)=>{

    let state = props.dialogsPage;

     let dialogsElements = state.dialogs.map( d=> (<DialogItem key={d.id} name={d.name} id = {d.id}/>));
    let messagesElements = state.messages.map( m =>(<Message key={m.id}  message={m.message} /> ));
     let newMessageBody = state.newMessageBody;


   let addNewMessage=(values)=>{
       props.sendMessage(values.newMessageBody);

   }

  if(!props.isAuth){
      return <Redirect to={"/login"}  />
  };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                  <AddMessageFormRedux  onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

const  AddMessageForm =(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component="textarea" name ="newMessageBody" placeholder={"Enter your message"}></Field>
                </div>
                <div>
                    <button> Send</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux=reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);
export default Dialogs;