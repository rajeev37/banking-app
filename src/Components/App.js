import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { PrivateRoute } from '../routes/PrivateRoute';
import { Role} from '../util';

import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import Account from "./Page/Account/Account";
import AccountSummary from "./Page/AccountSummary/AccountSummary";
import Header from "./Organisms/Header/Header";
import { inject, observer } from "mobx-react";
@inject("rootStore")
@observer

class App extends Component {
    constructor(props) {
        super(props);
        
    };
    render() {
        const { authUser } = this.props.rootStore && this.props.rootStore.appStore;
        return (
            <Router>
                <div className="container">
                    <ToastContainer />
                    <Header />
                    <br/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute path="/account" roles={[Role.Admin]} authUser={authUser} component={Account} />
                        <PrivateRoute path="/account-summary" roles={[Role.User]} authUser={authUser} component={AccountSummary} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
