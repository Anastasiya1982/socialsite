import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react';



let state= {
    posts: [
        {id: 1, message: "Hi! How are you?", like: 5},
        {id: 2, message: "It's my first post", like: 12}

    ],
};
test('new post should be added', () => {
    let action=addPostActionCreator("it-kamasutra");
    let newState=profileReducer(state,action);
    expect( newState.posts.length).toBe(3);

});
test('new post message should be correct', () => {
    let action=addPostActionCreator("it-kamasutra");
    let newState=profileReducer(state,action);
    expect(newState.posts[2].message).toBe("it-kamasutra");
});

test ('after deleting the length of posts message should be decrement',()=>
{
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);

});
test ('after deleting the length of posts message should be stay if id is incorrect',()=>
{
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);

});
