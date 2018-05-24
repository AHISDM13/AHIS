import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { firebase } from "../firebase";
import * as routes from "../constants/routes";
import "../App.css";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import PasswordForgetPage from "./PasswordForget";
import CreateClass from "./Classroom/CreateClassroom";
import Nav from "./Nav/Nav";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header user={this.state.authUser} />
          <Nav />
          <div className="Main">
            <Route exact path={routes.LANDING} component={() => <Landing />} />
            <Route
              exact
              path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact
              path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            <Route
              exact
              path={routes.PASSWORD_FORGET}
              component={() => <PasswordForgetPage />}
            />
            <Route exact path={routes.HOME} component={() => <Home />} />
            <Route exact path={routes.PROFILE} component={() => <Profile />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
