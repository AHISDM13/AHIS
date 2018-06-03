import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { firebase } from "../firebase";
import "../App.css";
import Header from "./Header/Header";
import mySwitch from "../constants/mySwitch";
class App extends Component {
  state = {
    authUser: null
  };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }
  render() {
    const { authUser } = this.state;
    return (
      <div className="App">
        <Header user={authUser} />
        <div className="main">{mySwitch}</div>
      </div>
    );
  }
}

export default App;
