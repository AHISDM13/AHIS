import React, { createRef } from "react";
import { connect } from "react-redux";
import TeacherView from "./ClassView/Teacher View/TeacherView";
import Student from "../Student/Student";
import axios from "axios";
import { withRouter } from "react-router-dom";
class Classroom extends React.Component {
  state = { quizs: [] };

  componentDidMount() {
    const { match } = this.props;
    axios.get(`/api/quizs/${match.params.id}`).then(quizs => {
      this.setState(() => ({ quizs: quizs.data }));
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      axios.get(`/api/quizs/${match.params.id}`).then(quizs => {
        this.setState(() => ({ quizs: quizs.data }));
      });
    }
  }

  render() {
    const { user, currentClassroom, isLoading } = this.props;
    console.log(currentClassroom);
    const { quizs } = this.state;
    return (
      <div className="Classroom">
        {isLoading ? (
          <div>......Loading</div>
        ) : user.id === currentClassroom.owner_id ? (
          <TeacherView
            user={user}
            currentClassroom={currentClassroom}
            quizs={quizs}
          />
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
    currentClassroom: state.classRoomReducer.currentClassroom,
    isLoading: state.classRoomReducer.isLoading
  };
};
export default withRouter(connect(mapStateToProps)(Classroom));
