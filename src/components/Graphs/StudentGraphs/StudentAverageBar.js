import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { connect } from "react-redux";
import { getStudentClassResults } from "../../../ducks/studentReducer";

class StudentAverageBar extends Component {
  constructor() {
    super();

    this.state = {
      average: [],
      title: []
    };
  }
  componentDidMount() {
    let newAvg = [];
    let newTitle = [];
    this.props
      .getStudentClassResults(
        this.props.user.id,
        this.props.currentClassroom.classroom_id
      )
      .then(() =>
        this.props.studentClassResults
          .filter(el => el.totalqnum >= 1)
          .map(e => {
            newAvg.push(e.correctnum / e.totalqnum);
            newTitle.push(e.quiz_name);
          })
      )
      .then(() =>
        this.setState({
          average: newAvg,
          title: newTitle
        })
      );
  }

  render() {
    console.log(this.props.currentClassroom.classroom_id);
    let filtered = this.props.studentClassResults.filter(
      el => el.totalqnum >= 1
    );
    let reduced = filtered.reduce((acc, e, i) => {
      console.log(e.correctnum / e.totalqnum);
      return acc + e.correctnum / e.totalqnum;
    }, 0);
    console.log(this.state);

    let data = {
      labels: this.state.title,
      datasets: [
        {
          label: "Quiz scores per class",
          backgroundColor: "rgba(0,184, 217,0.6)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.average
        }
      ]
    };
    let avg = Math.round((reduced / filtered.length) * 100) + "%";
    let pieData = {
      labels: ["", `Your grade: ${avg}`],
      datasets: [
        {
          label: "test",
          backgroundColor: ["#FFF", "#36A2EB"],
          borderColor: ["black", "black"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          data: [filtered.length, reduced]
        }
      ]
    };

    console.log((reduced / filtered.length) * 360);
    return (
      <div>
        <h2 style={{ fontSize: "20px" }}>Student Quiz Scores</h2>
        <div>
          <h3>
            Your average score in {this.props.currentClassroom.title}
            <span>
              <p>{avg}</p>
            </span>
          </h3>
        </div>
        <Bar
          data={data}
          width={75}
          height={30}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    callback: function(label, index, labels) {
                      return `${Number(label) * 100}%`;
                    }
                  }
                }
              ]
            }
          }}
        />
        {/* <Doughnut
          data={pieData}
          width={100}
          height={200}
          options={{
            maintainAspectRatio: true
          }} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.studentReducer,
    ...state.classRoomReducer,
    ...state.userReducer
  };
}
export default connect(
  mapStateToProps,
  { getStudentClassResults }
)(StudentAverageBar);
