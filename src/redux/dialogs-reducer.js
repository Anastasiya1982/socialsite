const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SENT_MESSAGE = "SENT_MESSAGE";

 let initialState ={
     dialogs: [
         {id: 1, name: "Dimych"},
         {id: 2, name: "Andrey"},
         {id: 3, name: "Viktor"},
         {id: 4, name: "Sasha"},
         {id: 5, name: "Valera"},
         {id: 6, name: "Ihor"}
     ],
     messages: [
         {id: 1, message: "Hi"},
         {id: 2, message: "How are you?"},
         {id: 3, message: "I want to meet with you?"},
         {id: 4, message: "Lets go for a walk"}
     ],
     newMessageBody:""
 }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SENT_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: ' ',
                messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator=()=>({ type:SENT_MESSAGE});

export const updateNewMessageBodyCreator=(body)=>({
    type:UPDATE_NEW_MESSAGE_BODY,body:body
})
export default dialogsReducer;