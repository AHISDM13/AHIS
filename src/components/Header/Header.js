import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import * as routes from "../../constants/routes";
import SignOutButton from "../SignOut";
const Header = ({ user }) => (
  <div className="Header">
    {user ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
);

const NavigationAuth = () => (
  <div className="Header_nav">
    <Link className="Header_nav_link" to={routes.HOME}>
      Home
    </Link>
    <Link className="Header_nav_link" to={routes.PROFILE}>
      Profile
    </Link>
    <SignOutButton />
  </div>
);

const NavigationNonAuth = () => (
  <div className="Header_nav">
    <Link className="Header_nav_link" to={routes.LANDING}>
      Sign In
    </Link>
  </div>
);

export default Header;
