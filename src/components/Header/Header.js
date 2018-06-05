import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import * as routes from "../../constants/routes";
import SignOutButton from "../SignOut";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
const Header = ({ user }) => (
  <div className="Header">
    {user !== null ? <NavigationAuth /> : <NavigationNonAuth />}
    {console.log(user)}
    {/* <Search /> */}
  </div>
);

class NavigationAuth extends React.Component {
  render() {
    return (
      <div>
        <div className="Header_top">
          <Nav />
          <h1 className="Header_logo">Nito</h1>
        </div>
        <div>
          <SignOutButton />
        </div>
      </div>
    );
  }
}

const NavigationNonAuth = () => (
  <div className="Header_nav">
    <span className="Header_logo unauth">Nito</span>
    {/* <Link className="Header_nav_link" to={routes.LANDING}>
      <i className="fas fa-sign-in-alt fa-2x" />
    </Link> */}
  </div>
);

export default Header;
