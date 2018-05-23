import React, { Component } from "react";
import SignInPage from "../SignIn";
import SignUpPage from "../SignUp";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="Landing">
      {/* <SignUpPage /> */}
      <SignInPage />
    </div>
  );
};

export default Landing;
