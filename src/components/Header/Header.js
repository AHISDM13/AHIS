import React from "react";
import "./Header.css";
import SignOutButton from "../SignOut";
import Nav from "../Nav/Nav";
const Header = ({ user }) => (
  <div className="Header">
    {user !== null ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
);

class NavigationAuth extends React.Component {
  render() {
    return (
      <div className="Header_full">
          <span className="Header_logo auth">
           NITO
          </span> 
           <Nav />
          <SignOutButton />
      </div>
    );
  }
}

const NavigationNonAuth = () => (
  <div className="Header_full">
    <span className="Header_logo unauth">
    NITO
    </span>
  </div>
);

export default Header;
