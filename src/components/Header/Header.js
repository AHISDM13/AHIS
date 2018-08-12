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
        <div className="Header_top">
          <Nav />
          <span className="Header_logo auth">
           NITO
          </span>
        </div>

        <div>
          <SignOutButton />
        </div>
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
