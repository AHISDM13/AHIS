import React, { Component } from "react";
import { connect } from "react-redux";
import "./ClassView.css";

function QuizClassView(props) {
  return (
    <div className="each-quiz box">
      <p>Title</p>
      <p>Questions</p>
    </div>
  );
}

function Resources(props) {
  return (
    <div className="each-resource box">
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
  removeQuiz() {}
  render() {
    // let classQuiz = this.props.quizzes.map((quiz, i) => {
    //   return <QuizClassView key={i} title={quiz.quiz_name} number={e.count} />;
    // });
    // let classResource = this.props.resources.map((e, i) => {
    //   return (
    //     <Resources
    //     key={i}
    //     title={e.title}
    //     date={e.date} />
    //   )
    // })

    let resoursyy;
    return (
      <div className="classview-page">
        <h2>Quizzes</h2>

        <div className="quizzes-container">
          {/*{classQuiz}*/}
          <QuizClassView />
        </div>
        <h2>Resources</h2>
        <div className="resources-container">
          {/* {classResource} */}
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
