import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../components/Landing/Landing";
import SignUp from "../components/Auth/SignUp/SignUp";
import SignIn from "../components/Auth/SignIn/SignIn";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/signup" {...SignUp} />
    <Route path="/signin" {...SignIn} />
    {/* <Route path="/pwforget" component={PwForget} /> */}
  </Switch>
);
