import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import routes from "./myRoutes/routes";
import routes_landing from "./myRoutes/routes_landing";
import Landing from "./components/Landing/Landing";
class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="App">
        {location.pathname === "/" ? (
          <Landing />
        ) : (
          <div className="Main">
            <Header />
              <Nav />
            {location.pathname == "/home" ? <Home /> : routes}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(App);
