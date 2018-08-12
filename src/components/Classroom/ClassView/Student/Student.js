import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuiz } from "../../../../ducks/quizReducer";
import "./Student.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class Student extends Component {
  constructor(props) {
    super(props);

    this.launchQuiz = this.launchQuiz.bind(this);
  }

  componentDidMount() {
    this.props.getQuiz(this.props.classRooms.id);
  }

  handleTab = (event, value) => {
    this.setState({ value: +value });
  };

  launchQuiz() {}
  render() {
    let classQuiz = this.props.quiz.map((quiz, i) => {
      return (
        <div onClick={this.launchQuiz} className="each-quiz box" key={i}>
          <p>{quiz.quiz_name}</p>
          <p>{quiz.count} </p>
        </div>
      );
    });
   
    return (
      <div className="student-page">
        <Tabs value={this.state.value} onChange={this.handleTab} centered>
          <Tab label="Flash Cards" value="0" />
          <Tab label="Quizzes" value="1" />

          <Tab label="Graphs" value="2" />
          <Tab label="Resources" value="3" />
        </Tabs>
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
