import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeLanding from "../pages/HomeLanding";
import Login from "../pages/Login";
import MainHome from "../pages/MainHome";
import Cuenta from "../pages/Cuenta";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Home" component={HomeLanding} />
        <Route exact path="/Home/Login" component={Login} />
        <Route exact path="/Main" component={MainHome} />
        <Route exact path="/Cuenta" component={Cuenta} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
