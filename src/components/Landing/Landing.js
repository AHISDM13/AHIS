import React, { Component } from "react";
import "./Landing.css";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        Lading Page this will handle your auth
        <Link to="/home">
          <FlatButton label="Go to Home" />
        </Link>
      </div>
    );
  }
}

export default Landing;
