import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.module.css";

import { ROUTES } from "../constants";
import Home from "./Home";
import WAHome from "./WAHome";
import WATaal from "./WATaal";
import WAVerhalen from "./WAVerhalen";
import WAForm from "./WAForm";
import Qrgenerator from "./Qrgenerator";
import NotFound from "../components/notfound/index";

function App() {
  return (
    <main>
      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route
          path={ROUTES.application}
          exact
          strict
          render={({ match }) => {
            const typevervoer = match.params.typevervoer;
            const stoelnummer = match.params.stoelnummer;
            const voertuignummer = match.params.voertuignummer;
            return (
              <WAHome
                typevervoer={typevervoer}
                stoelnummer={stoelnummer}
                voertuignummer={voertuignummer}
              />
            );
          }}
        />
        <Route
          path={ROUTES.applicationtaal}
          exact
          strict
          render={({ match }) => {
            const typevervoer = match.params.typevervoer;
            const stoelnummer = match.params.stoelnummer;
            const voertuignummer = match.params.voertuignummer;
            return (
              <WATaal
                typevervoer={typevervoer}
                stoelnummer={stoelnummer}
                voertuignummer={voertuignummer}
              />
            );
          }}
        />
        <Route
          path={ROUTES.applicationverhalen}
          exact
          strict
          render={({ match }) => {
            const typevervoer = match.params.typevervoer;
            const stoelnummer = match.params.stoelnummer;
            const voertuignummer = match.params.voertuignummer;
            return (
              <WAVerhalen
                typevervoer={typevervoer}
                stoelnummer={stoelnummer}
                voertuignummer={voertuignummer}
              />
            );
          }}
        />
        <Route
          path={ROUTES.applicationusername}
          exact
          strict
          render={({ match }) => {
            const typevervoer = match.params.typevervoer;
            const stoelnummer = match.params.stoelnummer;
            const voertuignummer = match.params.voertuignummer;
            return (
              <WAForm
                typevervoer={typevervoer}
                stoelnummer={stoelnummer}
                voertuignummer={voertuignummer}
              />
            );
          }}
        />
        <Route path={ROUTES.qrgenerator} component={Qrgenerator} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default withRouter(App);
