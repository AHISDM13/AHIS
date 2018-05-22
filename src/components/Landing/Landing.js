import React, { Component } from "react";
import "./Landing.css";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";
import SignUpPage from "../Auth/SignUp/SignUp";
import SignInPage from "../Auth/SignIn/SignIn";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        Lading Page this will handle your auth
        <SignUpPage />
        <SignInPage />
        <Link to="/home">
          <FlatButton label="Go to Home" />
        </Link>
      </div>
    );
  }
}

export default Landing;
