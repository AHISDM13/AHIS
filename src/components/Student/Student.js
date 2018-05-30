import React from "react";
import "./Student.css";
import Quiz from "./Quiz/Quiz";
import StudentAverageBar from "../Graphs/StudentGraphs/StudentAverageBar";
class Student extends React.Component {
  render() {
    const { user, currentClassroom, quizs } = this.props;
    // console.log(this.props);
    return (
      <div className="Student">
        display student view
        <Quiz user={user} currentClassroom={currentClassroom} quizs={quizs} />
        <StudentAverageBar />
      </div>
    );
  }
}

export default Student;
