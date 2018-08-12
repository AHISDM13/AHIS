import React, { Component } from "react";
import { firebase } from "../firebase";
import "../App.css";
import Header from "./Header/Header";
import mySwitch from "../constants/mySwitch";
import Search from "./Search/Search";
import {withRouter} from "react-router-dom"
import Footer from "../components/Footer/Footer"
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
        <Header style={this.props.match.path==="/"?{display:'none'}:{display:'block'}} user={authUser}/>
        <div className="main">
          <Search />
          {mySwitch}
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
