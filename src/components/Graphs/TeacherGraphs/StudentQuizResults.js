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
    //     labels: [].push(student.quiz),
    //     datasets: [
    //       {
    //         label: [student.user],
    //         data: [0, 5, 6, 7, 3, 44, 2],
    //         fill: false,
    //         lineTension: 0.1,
    //         backgroundColor: "#92A99E",
    //         borderColor: "rgba(75,192,192,1)",
    //         borderCapStyle: "butt",
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: "miter",
    //         pointBorderColor: "rgba(75,192,192,1)",
    //         //   pointBackgroundColor: "#fff",
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 10,
    //         pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //         pointHoverBorderColor: "rgba(220,220,220,1)",
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 4,
    //         pointHitRadius: 7
    //         //   backgroundColor: ["#92A99E"]
    //       },
    //       {
    //         label: ["Daveed"],
    //         data: [55, 55, 6, 7, 3, 44, 2],
    //         fill: false,
    //         lineTension: 0.1,
    //         backgroundColor: "#92A99E",
    //         borderColor: "rgba(75,192,192,1)",
    //         borderCapStyle: "butt",
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: "miter",
    //         pointBorderColor: "rgba(75,192,192,1)",
    //         //   pointBackgroundColor: "#fff",
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 10,
    //         pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //         pointHoverBorderColor: "rgba(220,220,220,1)",
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 4,
    //         pointHitRadius: 7
    //         //   backgroundColor: ["#92A99E"]
    //       },
    //       {
    //         label: ["Bojangle"],
    //         data: [30, 45, 10, 7, 3, 44, 2],
    //         fill: false,
    //         lineTension: 0.1,
    //         backgroundColor: "#92A99E",
    //         borderColor: "rgba(75,192,192,1)",
    //         borderCapStyle: "butt",
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: "miter",
    //         pointBorderColor: "rgba(75,192,192,1)",
    //         //   pointBackgroundColor: "#fff",
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 10,
    //         pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //         pointHoverBorderColor: "rgba(220,220,220,1)",
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 4,
    //         pointHitRadius: 7
    //         //   backgroundColor: ["#92A99E"]
    //       }
    //     ]
    //   };
    // });
    // console.log("STATE", this.state);
    // const chartData = {
    //   labels: ["quiz1", "quiz2"],
    //   datasets: [
    //     {
    //       label: ["Shanelle"],
    //       data: [0, 5, 6, 7, 3, 44, 2],
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: "#92A99E",
    //       borderColor: "rgba(75,192,192,1)",
    //       borderCapStyle: "butt",
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: "miter",
    //       pointBorderColor: "rgba(75,192,192,1)",
    //       //   pointBackgroundColor: "#fff",
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 10,
    //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //       pointHoverBorderColor: "rgba(220,220,220,1)",
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 4,
    //       pointHitRadius: 7
    //       //   backgroundColor: ["#92A99E"]
    //     },
    //     {
    //       label: ["Daveed"],
    //       data: [55, 55, 6, 7, 3, 44, 2],
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: "#92A99E",
    //       borderColor: "rgba(75,192,192,1)",
    //       borderCapStyle: "butt",
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: "miter",
    //       pointBorderColor: "rgba(75,192,192,1)",
    //       //   pointBackgroundColor: "#fff",
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 10,
    //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //       pointHoverBorderColor: "rgba(220,220,220,1)",
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 4,
    //       pointHitRadius: 7
    //       //   backgroundColor: ["#92A99E"]
    //     },
    //     {
    //       label: ["Bojangle"],
    //       data: [30, 45, 10, 7, 3, 44, 2],
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: "#92A99E",
    //       borderColor: "rgba(75,192,192,1)",
    //       borderCapStyle: "butt",
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: "miter",
    //       pointBorderColor: "rgba(75,192,192,1)",
    //       //   pointBackgroundColor: "#fff",
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 10,
    //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //       pointHoverBorderColor: "rgba(220,220,220,1)",
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 4,
    //       pointHitRadius: 7
    //       //   backgroundColor: ["#92A99E"]
    //     }
    //   ]
    // };
    // this.setState({ chartData });

    return (
      <div className="chart">
        {studentsMapped}
        {/* <Line
          data={chartData}
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
        /> */}
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

export default connect(mapStateToProps, { getStudentQuizResults })(
  StudentQuizResults
);
