import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { connect } from "react-redux";
import { getStudentQuizResults } from "../../../ducks/studentReducer";
import StudentLine from "./StudentLine";

class StudentQuizResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentname: []
    };
  }

  componentDidMount() {
    let newStudentName = [];
    this.props
      .getStudentQuizResults(this.props.currentClassroom.classroom_id)
      .then(() =>
        this.props.studentQuizResults.filter(el => el.totalqnum >= 1).map(e => {
          newStudentName.push({
            user: e.username,
            score: e.correctnum / e.totalqnum,
            quiz: e.quiz_name
          });
        })
      )
      .then(() => {
        // let distinctStudents = newStudentName.filter((e, i, arr) => {
        //   return arr.indexOf(e) === i;
        // });
        this.setState({
          studentname: newStudentName
        });
      });
  }

  //   handleResults = (results) => {

  //   }

  render() {
    console.log(this.state);
    console.log(this.props.quizs);
    let studentsMapped = this.state.studentname.map((student, i) => {
      return (
        <StudentLine
          key={i}
          student={student.user}
          overallResults={this.props.studentQuizResults}
          quizs={this.props.quizs.map(e => e.quiz_name)}
        />
      );
    });

    return <div className="chart">{studentsMapped}</div>;
  }
}

function mapStateToProps(state) {
  return {
    ...state.studentReducer,
    ...state.classRoomReducer,
    ...state.quizReducer
  };
}

export default connect(mapStateToProps, { getStudentQuizResults })(
  StudentQuizResults
);
