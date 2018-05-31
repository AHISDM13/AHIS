import React, { Component } from "react";

export default class StudentLine extends Component {
  componentDidMount() {
    let mappedResults = this.props.overallResults
      .filter(e => e.username === this.props.student)
      .filter(score => score.totalqnum >= 1);

    let studentsQuizs = mappedResults.map(e => e.quiz_name);
    let allQuizs = this.props.quizs.map(
      (e, i, arr) => (!studentsQuizs.includes(e) ? studentsQuizs.push(e) : e)
    );
    console.log(mappedResults);
    console.log(studentsQuizs);
  }
  render() {
    console.log(this.props.overallResults);
    console.log(this.props.quizs);
    return <div>{this.props.student}</div>;
  }
}
