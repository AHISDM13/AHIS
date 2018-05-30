import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
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
      .getStudentClassResults(this.props.currentClassroom.classroom_id)
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
    console.log(this.state);

    let data = {
      labels: this.state.title,
      datasets: [
        {
          label: "Quiz scores per class",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: this.state.average
        }
      ]
    };

    return (
      <div>
        <h2>Student Quiz Scores</h2>
        <Bar
          data={data}
          width={100}
          height={50}
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
