import React, { Component } from "react";
import { connect } from "react-redux";
import Flashcards from "../../../Flashcards/Flashcards";
import { getQuiz } from "../../../../ducks/quizReducer";
import "./Student.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

class Student extends Component {
  constructor(props) {
    super(props);

    this.launchQuiz = this.launchQuiz.bind(this);
  }

  componentDidMount() {
    this.props.getQuiz(this.props.classRooms.id);
  }
  launchQuiz() {}
  render() {
    // console.log(this.props);
    let classQuiz = this.props.quiz.map((quiz, i) => {
      return (
        <div onClick={this.launchQuiz} className="each-quiz box" key={i}>
          <p>{quiz.quiz_name}</p>
          <p>{quiz.count} </p>
        </div>
      );
    });
    // let classResource = this.props.resources.map((e, i) => {
    //   return (
    //     <div className="each-resource box" key={i}>
    //       <p>{e.title}</p>{" "}
    //     </div>
    //   );
    // });
    return (
      <div className="student-page">
        <div className="navigate">Navigation</div>
        <div className="student-content">
          <button className="analytics">View Your Scores</button>
          <h2>Quizzes</h2>
          {this.props.quiz.length && (
            <div className="quizzes-container">{classQuiz}</div>
          )}
          <h2>Resources</h2>
          <div className="resources-container">{/* {classResource} */}</div>
          {/* <Flashcards /> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.quizReducer,
    ...state.classRoomReducer
  };
}
export default connect(
  mapStateToProps,
  { getQuiz }
)(Student);
