import React, { createRef } from "react";
import { connect } from "react-redux";
import TeacherView from "./ClassView/Teacher View/TeacherView";
import Student from "../Student/Student";
import axios from "axios";
import { withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { storeQuizs } from "../../ducks/quizReducer";
import { getAllFiles } from "../../ducks/searchReducer";
class Classroom extends React.Component {
  state = { quizs: [] };

  componentDidMount() {
    const { match, storeQuizs, getAllFiles } = this.props;
    axios.get(`/api/quizs/${match.params.id}`).then(quizs => {
      getAllFiles(match.params.id);
      this.setState(() => ({ quizs: quizs.data }));
      storeQuizs(quizs.data);
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const { match, storeQuizs, getAllFiles } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      axios.get(`/api/quizs/${match.params.id}`).then(quizs => {
        getAllFiles(match.params.id);
        this.setState(() => ({ quizs: quizs.data }));
        storeQuizs(quizs.data);
      });
    }
  }

  render() {
    const { user, currentClassroom, isLoading } = this.props;
    console.log(currentClassroom);
    console.log(this.state.quizs);
    const { quizs } = this.state;
    return (
      <div className="Classroom">
        {isLoading ? (
          <CircularProgress size={50} />
        ) : user.id === currentClassroom.owner_id ? (
          <TeacherView user={user} currentClassroom={currentClassroom} />
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
export default withRouter(
  connect(
    mapStateToProps,
    { storeQuizs, getAllFiles }
  )(Classroom)
);
