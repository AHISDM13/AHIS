import React from "react";
import { connect } from "react-redux";
import TeacherView from "./ClassView/Teacher View/TeacherView";
import Student from "../Student/Student";
import axios from "axios";
import { withRouter } from "react-router-dom";
class Classroom extends React.Component {
  state = { quizs: [] };
  componentDidMount() {
    const { match } = this.props;
    axios
      .get(`/api/quizs/${match.params.id}`)
      .then(quizs => this.setState(() => ({ quizs: quizs.data })));
  }
  render() {
    const { user, currentClassroom } = this.props;
    const { quizs } = this.state;
    return (
      <div className="Classroom">
        {user.id === currentClassroom.owner_id ? (
          <TeacherView />
        ) : (
          <Student
            user={user}
            currentClassroom={currentClassroom}
            quizs={quizs}
          />

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
