import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeLanding from "../pages/HomeLanding";
import Login from "../pages/Login";
import MainHome from "../pages/MainHome";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home" component={HomeLanding} />
        <Route exact path="/Home/Login" component={Login} />
        <Route exact path="/Main" component={MainHome} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
