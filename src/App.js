import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            // <BrowserRouter>
            < div className="app-wrapper">
                < HeaderContainer/>
                < Nav/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />
                           }/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer />
                           }/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}
                    />
                    <Route path='/login'
                           render={() => <LoginPage/>}
                    />
                    {/*<Route path ='/news'     component ={News}/>*/}
                    {/*<Route path ='/music'     component ={Music}/>*/}
                    {/*<Route path ='/settings'  component ={Settings}/>*/}
                </div>
            </div>
            // </BrowserRouter>
        );

    }
}
const mapStateToProps=(state)=>({
    initialized:state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);
