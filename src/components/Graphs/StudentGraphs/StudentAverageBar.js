import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { connect } from "react-redux";
import { getStudentClassResults } from "../../../ducks/studentReducer";

class StudentAverageBar extends Component {
  constructor() {
    super();

    this.state = {
      chartData: {}
    };
  }
  componentDidMount() {
    if (this.props.currentClassroom)
      this.props.getStudentClassResults(
        this.props.currentClassroom.classroom_id
      );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.studentClassResults !== this.props.studentClassResults) {
      let scores = this.props.studentClassResults.map((e, i) => {
        return e.correctnum / e.totalqnum;
      });
      let quizName = this.props.studentClassResults.map((e, i) => {
        return e.quiz_id;
      });

      const data = {
        labels: quizName,
        datasets: [
          {
            label: "Quiz scores per class",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: scores
          }
        ]
      };
      this.setState({ chartData: data });
    }
  }
  render() {
    console.log(this.props.currentClassroom);
    console.log(this.state);
    return (
      <div>
        <h2>Student Quiz Scores</h2>
        <Bar
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.studentReducer,
    ...state.classRoomReducer
  };
}
export default connect(mapStateToProps, { getStudentClassResults })(
  StudentAverageBar
);
