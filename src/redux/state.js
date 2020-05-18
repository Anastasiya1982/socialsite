import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi! How are you?", like: 5},
            {id: 2, message: "It's my first post", like: 12},
        ],

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
        ]
    }

}
 export let addPost = (postMessage) => {
    let newPost ={
        id:5,
        message: postMessage,
        like:0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};


export default state;