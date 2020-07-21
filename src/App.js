import React, {Suspense} from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import Switch from "react-router-dom/es/Switch";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

    // catchAllUnhandledErrors=(reason,promise)=>{
    //        alert("Some error");
    //    }
    componentDidMount() {
        this.props.initializeApp();
        // window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors);
   }

   // componentWillUnmount() {
   //     window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors);
   // }


    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            < div className="app-wrapper">
                < HeaderContainer/>
                < Nav/>
                <div className="app-wrapper-content">
                    <Switch>
                   <Route exact path='/'
                               render={()=><Redirect  to ={"/profile"}/>}/>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer /> }/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={withSuspense(LoginPage)}/>
                    {/*<Route path ='/news'     component ={News}/>*/}
                    {/*<Route path ='/music'     component ={Music}/>*/}
                    {/*<Route path ='/settings'  component ={Settings}/>*/}

                    <Route path = "*"
                           render={()=><div>404 Not found</div> } />



                    </Switch>
                </div>
            </div>
        );

    }
}
const mapStateToProps=(state)=>({
    initialized:state.app.initialized
})

const AppContainer= compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);

 const MainAppComponent=(props)=>{
   return <BrowserRouter >
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MainAppComponent;