import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    return <div className="Home" />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
}
export default connect(mapStateToProps)(Home);
