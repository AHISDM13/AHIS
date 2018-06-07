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
      studentname: [],
      selectedStudent: "",
      studentData: {}
    };
  }

  componentDidMount() {
    let newStudentName = [];
    this.props
      .getStudentQuizResults(this.props.currentClassroom.classroom_id)
      .then(() =>
        this.props.studentQuizResults
          .map(el => el.username)
          .filter((student, i, arr) => arr.indexOf(student) === i)
          .map(e => newStudentName.push(e))
      )
      .then(() => {
        this.setState({
          studentname: newStudentName
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    let studentAvg = [];
    let studentTitle = [];
    if (prevState.selectedStudent !== this.state.selectedStudent) {
      this.props.studentQuizResults
        .filter(student => student.username === this.state.selectedStudent)
        .filter(el => el.totalqnum >= 1)
        .map(e => {
          studentAvg.push(e.correctnum / e.totalqnum);
          studentTitle.push(e.quiz_name);
        });

      this.setState({
        studentData: {
          labels: studentTitle,
          datasets: [
            {
              label: [this.state.selectedStudent],
              data: studentAvg,
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#92A99E",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              //   pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 10,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 4,
              pointHitRadius: 7
              //   backgroundColor: ["#92A99E"]
            }
          ]
        }
      });
    }
  }

  handleSelect = event => {
    this.setState({
      selectedStudent: event
    });
  };

  render() {
    return (
      <div className="chart">
        <select
          value={this.state.selectedStudent}
          onChange={e => this.handleSelect(e.target.value)}
        >
          <option value="">Choose Student</option>
          {this.state.studentname.map((student, i) => {
            return (
              <option key={i} value={student}>
                {student}
              </option>
            );
          })}
        </select>
        {this.state.selectedStudent && (
          <Line
            data={this.state.studentData}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Quiz Scores",
                      fontSize: 20
                    }
                  }
                ],
                xAxes: [
                  {
                    label: "Quiz Name"
                  }
                ]
              },
              title: {
                display: true,
                text: "Student Quiz Scores",
                fontSize: 22
              },
              legend: {
                display: true,
                position: "top"
              }
            }}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.studentReducer,
    ...state.classRoomReducer,
    ...state.quizReducer
  };
}

export default connect(
  mapStateToProps,
  { getStudentQuizResults }
)(StudentQuizResults);
