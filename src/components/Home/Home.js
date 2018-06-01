import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
import Upload from "../Upload";
class Home extends Component {
  componentDidMount() {}
  render() {
    // console.log(this.props);
    return (
      <div>
        Home<Upload />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    myClassRooms: state.classRoomReducer.classRooms,
    joinedClasses: state.classRoomReducer.joinedClasses
  };
}
export default connect(mapStateToProps)(Home);
