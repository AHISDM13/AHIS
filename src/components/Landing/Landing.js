import React, { Component } from "react";
import SignInPage from "../SignIn";
import SignUpPage from "../SignUp";
import { Link } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
const Landing = () => {
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
};

export default Landing;
