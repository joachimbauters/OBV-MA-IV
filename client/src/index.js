import React from "react";
import { Provider } from "mobx-react";
import ReactDOM from "react-dom";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./containers/App.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
