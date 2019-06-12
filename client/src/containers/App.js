import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.module.css";

import { ROUTES } from "../constants";
import Home from "./Home";
import WAHome from "./WAHome";
import WATaal from "./WATaal";
import WAVerhalen from "./WAVerhalen";
import WAForm from "./WAForm";
import WABedankt from "./WABedankt";
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
          render={({ match }) => (
            <WAHome
              typevervoer={match.params.typevervoer}
              stoelnummer={match.params.stoelnummer}
              voertuignummer={match.params.voertuignummer}
            />
          )}
        />
        <Route
          path={ROUTES.applicationtaal}
          exact
          strict
          render={({ match }) => (
            <WATaal
              typevervoer={match.params.typevervoer}
              stoelnummer={match.params.stoelnummer}
              voertuignummer={match.params.voertuignummer}
            />
          )}
        />
        <Route
          path={ROUTES.applicationverhalen}
          exact
          strict
          render={({ match }) => (
            <WAVerhalen
              typevervoer={match.params.typevervoer}
              stoelnummer={match.params.stoelnummer}
              voertuignummer={match.params.voertuignummer}
            />
          )}
        />
        <Route
          path={ROUTES.applicationusername}
          exact
          strict
          render={({ match }) => (
            <WAForm
              typevervoer={match.params.typevervoer}
              stoelnummer={match.params.stoelnummer}
              voertuignummer={match.params.voertuignummer}
            />
          )}
        />
        <Route path={ROUTES.applicationbedankt} component={WABedankt} />
        <Route path={ROUTES.qrgenerator} component={Qrgenerator} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
