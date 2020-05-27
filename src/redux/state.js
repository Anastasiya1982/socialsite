const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY="UPDATE_NEW_MESSAGE_BODY";
const SENT_MESSAGE="SENT_MESSAGE";

let store={
    _state :{
        profilePage: {
            posts: [
                {id: 1, message: "Hi! How are you?", like: 5},
                {id: 2, message: "It's my first post", like: 12},

            ],
            newPostText:"it-camasutra.com"
        },
        dialogsPage: {
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
        },
        sidebar:{}

    },
    _callSubscriber() {
        console.log("State was changed");
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    // addPost  ()  {
    //     let newPost ={
    //         id:5,
    //         message: this._state.profilePage.newPostText,
    //         like:0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText="";
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText){
    //     this._state.profilePage.newPostText= newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action){  //{type:"ADD-POST"}
        if(action.type==="ADD-POST"){
            let newPost ={
                id:5,
                message: this._state.profilePage.newPostText,
                like:0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText="";
            this._callSubscriber(this._state);
        } else if(action.type ==="UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText= action.newText;
            this._callSubscriber(this._state);
        } else if( action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody=action.body;
            this._callSubscriber(this._state);
        } else if(action.type===SENT_MESSAGE){
            let body=this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody="";
            this._state.dialogsPage.messages.push({id:6,message:body});
            this._callSubscriber(this._state);

        }
      }

    }

 export const addPostActionCreator=()=>({ type:ADD_POST});
 export const updateNewPostTextActionCreator=(text)=>({
    type:UPDATE_NEW_POST_TEXT, newText:text});

export const sendMessageCreator=()=>({ type:SENT_MESSAGE});

export const updateNewMessageBodyCreator=(body)=>({
    type:UPDATE_NEW_MESSAGE_BODY,body:body
})





export default store ;
window.store=store;

//store -OOP