import React from "react";
import "./Header.css";
import SignOutButton from "../SignOut";
import Nav from "../Nav/Nav";
import logo from "../logo.png";

const Header = ({ user }) => (
  <div className="Header">
    {user !== null ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
);

class NavigationAuth extends React.Component {
  render() {
    return (
      <div className="Header_full">
        <div className="Header_top">
          <Nav />
          <img src={logo} alt="logo" className="logo" />
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
    <span className="Header_logo unauth">
      <img src={logo} className="logo" width="50" />
    </span>
  </div>
);

export default Header;
