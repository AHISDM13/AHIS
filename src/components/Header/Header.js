import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import * as routes from "../../constants/routes";
import SignOutButton from "../SignOut";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
const Header = ({ user }) => (
  <div className="Header">
    {user ? <NavigationAuth /> : <NavigationNonAuth />}
    {/* <Search /> */}
  </div>
);

class NavigationAuth extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="Header_nav">
          <span className="Header_logo">AHIS</span>
          <Link className="Header_nav_link" to={routes.PROFILE}>
            Profile
          </Link>
          <Link className="Header_nav_link" to={routes.HOME}>
            Home
          </Link>
          <SignOutButton />
        </div>
      </div>
    );
  }
}

const NavigationNonAuth = () => (
  <div className="Header_nav">
    <span className="Header_logo">AHIS</span>
    <Link className="Header_nav_link" to={routes.LANDING}>
      Sign In
    </Link>
  </div>
);

export default Header;
