import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { connect } from "react-redux";

class StudentAveragePie extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  render() {
    const data = {
      labels: ["Total Correct Answers", "Total Incorrect Answer"],
      datasets: [
        {
          label: "test",
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          data: [100, 59]
        }
      ]
    };

    return (
      <div>
        <h2>Student Quiz Scores</h2>
        <Doughnut
          data={data}
          width={100}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default StudentAveragePie;
