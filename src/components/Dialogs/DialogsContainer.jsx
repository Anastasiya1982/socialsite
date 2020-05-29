import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

            let state = props.store.getState().dialogsPage;

            let onNewMessageChange = (body) => {
                props.store.dispatch(updateNewMessageBodyCreator(body));
            }

            let onSendMessageClick = () => {
                props.store.dispatch(sendMessageCreator());
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
        }

export default DialogsContainer;