import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    console.log(this.props, this.state);
    return <div className="Home"> this is my HOOOM</div>;
  }
}

export default Home;
