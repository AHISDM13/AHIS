import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    console.log(this.props);
    return <div>home</div>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    classRooms: state.classRoomReducer.classRooms
  };
}
export default connect(mapStateToProps)(Home);
