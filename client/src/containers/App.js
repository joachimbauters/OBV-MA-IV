import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.module.css";

import { ROUTES } from "../constants";
import Home from "./Home";
import Qrgenerator from "./Qrgenerator";

function App() {
  return (
    <main>
      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route path={ROUTES.qrgenerator} component={Qrgenerator} />
      </Switch>
    </main>
  );
}

export default withRouter(App);
