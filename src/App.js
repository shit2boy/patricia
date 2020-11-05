import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import UserPage from "./Components/UserPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/userpage" component={UserPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
