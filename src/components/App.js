import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { firebase } from "../firebase";
import * as routes from "../constants/routes";
import "../App.css";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import Home from "./Home/Home";
import PasswordForgetPage from "./PasswordForget";
import Profile from "./Profile/Profile";
import CreateClassroom from "./Classroom/CreateClassroom";

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
    const { authUser } = this.state;
    return (
      <div>
        <Header user={authUser} />
        <Switch>
          <Route exact path={routes.LANDING} component={() => <Landing />} />
          <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
          <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />

          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route exact path={routes.HOME} component={() => <Home />} />
          <Route exact path={routes.PROFILE} component={() => <Profile />} />
          <Route
            exact
            path={routes.CREATECLASS}
            component={() => <CreateClassroom />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
