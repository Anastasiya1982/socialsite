import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";




let store={
    _state :{
        profilePage: {
            posts: [
                {id: 1, message: "Hi! How are you?", like: 5},
                {id: 2, message: "It's my first post", like: 12},

            ],
            newPostText:"it-camasutra.com",

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
    dispatch(action){  //{type:"ADD-POST"}
        this._state.profilePage= profileReducer(this._state.profilePage,action);
         this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar= sidebarReducer(this._state.sidebar,action);
            this._callSubscriber(this._state);
      }
    }









export default store ;
window.store=store;

//store -OOP