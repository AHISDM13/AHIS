import React, { Component } from "react";
import { firebase } from "../firebase";
import "../App.css";
import Header from "./Header/Header";
import mySwitch from "../constants/mySwitch";
import Search from "./Search/Search";
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
    console.log(authUser)
    const { authUser } = this.state;
    return (
      <div className="App">
        <Header user={authUser} />
        <div className="main">
          <Search />
          {mySwitch}
        </div>
      </div>
    );
  }
}

export default App;
