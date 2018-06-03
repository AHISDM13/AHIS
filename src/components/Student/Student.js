import React from "react";
import "./Student.css";
import Quiz from "./Quiz/Quiz";

class Student extends React.Component {
  render() {
    const { user, currentClassroom, quizs } = this.props;
    return (
      <div className="Student">
        display student view
        <div className="Student_Quiz">
          <Quiz user={user} currentClassroom={currentClassroom} quizs={quizs} />
        </div>
      </div>
    );
  }
}

export default Student;
