import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

            // let onNewMessageChange = (body) => {
            //     props.store.dispatch(updateNewMessageBodyCreator(body));
            // }

            // let onSendMessageClick = () => {
            //     props.store.dispatch(sendMessageCreator());
            // }

            // return <Dialogs
            //                 // updateNewMessageBody={onNewMessageChange}
            //                 // sendMessage={onSendMessageClick}
            //                 // dialogsPage={state}
            // />



const mapStateToProps = (state)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
;
const mapDispatchToProps=(dispatch)=>
{
    return {
        updateNewMessageBody:(body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage:()=>{
            dispatch(sendMessageCreator());
        }
    }

}
;
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;