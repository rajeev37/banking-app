import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { PrivateRoute } from './routes/PrivateRoute';
import { Role} from './util';

import Home from "./Component/Page/Home/Home";
import Login from "./Component/Page/Login/Login";
import Account from "./Component/Page/Account/Account";
import AccountSummary from "./Component/Page/AccountSummary/AccountSummary";
import Header from "./Component/Organisms/Header/Header";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <br/>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/account" roles={[Role.Admin]} component={Account} />
          <PrivateRoute path="/account-summary" roles={[Role.User]} component={AccountSummary} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
