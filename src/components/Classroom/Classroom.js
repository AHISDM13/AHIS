import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TeacherView from "./ClassView/Teacher View/TeacherView";
import Student from "./ClassView/Student/Student";

class Classroom extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    const { match, currentClassroom } = this.props;
    console.log(currentClassroom);
    return (
      <div className="Classroom">
        {match.params.id === currentClassroom.owner_id ? (
          <div>owner view</div>
        ) : (
          <div>student view</div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    currentClassroom: state.classRoomReducer.currentClassroom
  };
};
export default withRouter(connect(mapStateToProps)(Classroom));
