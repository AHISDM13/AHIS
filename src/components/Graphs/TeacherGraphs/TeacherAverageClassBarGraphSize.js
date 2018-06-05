import React, { Component } from "react";
import TeacherAverageClassBar from "./TeacherAverageClassBar";
import "./TeacherAverageClassBarGraphSize.css";

class TeacherAverageClassBarGraphSize extends Component {
  render() {
    return (
      <div className="graph_size">
        <TeacherAverageClassBar />
      </div>
    );
  }
}

export default TeacherAverageClassBarGraphSize;
