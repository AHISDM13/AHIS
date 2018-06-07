import React from "react";
import { connect } from "react-redux";
import Upload from "../Upload";
class Resource extends React.Component {
  render() {
    return (
      <div className="Resource">
        <div className="Resource_upload">
          <Upload currentClassroom={this.props.currentClassroom} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    currentClassroom: state.classRoomReducer.currentClassroom
  };
}
export default connect(mapStateToProps)(Resource);
