import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./Component/Page/Home/Home";
import About from "./Component/Page/About/About";
import Header from "./Component/Organisms/Header/Header";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <br/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
