import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";

const App = (props) => {
    return (
        // <BrowserRouter>
            < div className="app-wrapper" >
               < Header/>
               < Nav/>
               <div className="app-wrapper-content">
                   <Route  path ='/dialogs'
                              render  ={() => <DialogsContainer
                                  store={props.store}
                                 />
                              }/>
                   <Route path ='/profile/:userId?'
                              render  ={() => <ProfileContainer
                              store={props.store}
                              />
                          }/>
                   <Route path ='/users'
                          render  ={() => <UsersContainer store={props.store}/>}
                          />
                   {/*<Route path ='/news'     component ={News}/>*/}
                   {/*<Route path ='/music'     component ={Music}/>*/}
                   {/*<Route path ='/settings'  component ={Settings}/>*/}
               </div>
            </div>
        // </BrowserRouter>
);

}


export default App;
