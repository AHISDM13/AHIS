import React, { Component } from "react";
import { connect } from "react-redux";
import "./ClassView.css";

function QuizClassView(props) {
  return (
    <div className="each-quiz">
      <p>Title</p>
      <p>Questions</p>
    </div>
  );
}

function Resources(props) {
  return (
    <div className="each-resource">
      <p>Title</p>
      <p>Date</p>
    </div>
  );
}
class ClassView extends Component {
  componentDidMount() {
    //getQuizzes
    //getResources
  }
  render() {
    // let classQuiz = this.props.quizzes.map((quiz, i) => {
    //   return <QuizClassView key={i} title={quiz.title} number={e.count} />;
    // });

    let resoursyy;
    return (
      <div className="classview-page">
        <h2>Quizzes</h2>
        {/* <div>{classQuiz}</div> */}
        <QuizClassView />
        <h2>Resources</h2>
        <div className="resources-container">
          <Resources />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.classRoomReducer };
}
export default ClassView;
