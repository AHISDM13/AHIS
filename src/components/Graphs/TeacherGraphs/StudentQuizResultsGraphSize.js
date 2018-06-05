import React, { Component } from "react";
import StudentQuizResults from "./StudentQuizResults";
import "./StudentQuizResultsGraphSize.css";

class StudentQuizResultsGraphSize extends Component {
  render() {
    return (
      <div className="graph_size">
        <StudentQuizResults />
      </div>
    );
  }
}

export default StudentQuizResultsGraphSize;
