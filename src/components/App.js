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
import { connect } from "react-redux";
import { getUser } from "../ducks/userReducer";
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
        ? (console.log(authUser.email),
          this.props.getUser(authUser.email),
          this.setState(() => ({ authUser })))
        : this.setState(() => ({ authUser: null }));
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header authUser={this.state.authUser} />
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
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.userReducer
  };
}
export default connect(mapStateToProps, { getUser })(App);
