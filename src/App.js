import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import AppDetails from "./Components/AppDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/home" exact>
          <Home></Home>
        </Route>
        <Route path="/app-details/:appId" exact>
          <AppDetails></AppDetails>
        </Route>
        <Route path="/*" exact>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
