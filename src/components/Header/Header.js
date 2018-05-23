import React from "react";
import Search from "../Search/Search";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>Nito</h1>

      <Search />
    </div>
  );
};

export default Header;
