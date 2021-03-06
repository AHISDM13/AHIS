import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import store from "./store";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
