import React from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "./routes";
import Landing from "../components/Landing/Landing";
import SignInPage from "../components/SignIn";
import SignUpPage from "../components/SignUp";
import Home from "../components/Home/Home";
import PasswordForgetPage from "../components/PasswordForget";
import Profile from "../components/Profile/Profile";
import CreateClassroom from "../components/Classroom/CreateClassroom";
import Classroom from "../components/Classroom/Classroom";
import CreateQuiz from "../components/CreateQuiz/CreateQuiz";
import SearchResult from "../components/SearchResult/SearchResult";

export default (
  <Switch>
    <Route exact path={routes.LANDING} component={() => <Landing />} />
    <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
    <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
    <Route exact path={routes.CREATEQUIZ} component={() => <CreateQuiz />} />
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
    <Route exact path={routes.CLASSROOM} component={() => <Classroom />} />
    <Route
      exact
      path={routes.SEARCHRESULT}
      component={() => <SearchResult />}
    />
  </Switch>
);
