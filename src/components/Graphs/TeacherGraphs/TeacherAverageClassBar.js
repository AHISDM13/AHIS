import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { connect } from "react-redux";

class TeacherAverageClassBar extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  render() {
    const data = {
      labels: [
        "Quiz 1",
        "Quiz 2",
        "Quiz 3",
        "Quiz 4",
        "Quiz 5",
        "Quiz 6",
        "Quiz 7"
      ],
      datasets: [
        {
          label: "Quiz scores per class",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    return (
      <div style={{ height: "200px", width: "300px" }}>
        <h2>Average Class Scores</h2>
        <Bar
          data={data}
          width={300}
          height={200}
          options={{
            responsive: false,
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
}

export default TeacherAverageClassBar;
