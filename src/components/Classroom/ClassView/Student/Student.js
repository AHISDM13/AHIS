import React, { Component } from "react";
import { connect } from "react-redux";
import Flashcards from "../../../Flashcards/Flashcards";

class Student extends Component {
  constructor() {
    super();

    this.launchQuiz = this.launchQuiz.bind(this);
  }

  componentDidMount() {
    //getQuizzes
    //getResources
  }
  launchQuiz() {}
  render() {
    let classQuiz = this.props.quizzes.map((quiz, i) => {
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
      <div className="classview-page">
        <h2>Quizzes</h2>

        <div className="quizzes-container">{classQuiz}</div>
        <h2>Resources</h2>
        <div className="resources-container">{/* {classResource} */}</div>
        <Flashcards />
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
export default connect(mapStateToProps)(Student);
