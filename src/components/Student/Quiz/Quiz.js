import React from "react";
import "./Quiz.css";
import FlatButton from "material-ui/FlatButton";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getQuestions } from "../../../ducks/quizReducer";
import { getResult } from "../../../ducks/studentReducer";
class Quiz extends React.Component {
  takeQuiz(quiz_id) {
    const { history, getQuestions } = this.props;
    getQuestions(quiz_id).then(() => history.push(`/test/${quiz_id}`));
  }
  review(quiz_id) {
    const { history, getResult } = this.props;
    getResult(quiz_id).then(() => {
      history.push(`/test/${quiz_id}/result`);
    });
  }
  render() {
    const { quizs } = this.props;
    const displayQuizs = quizs.map((el, i) => {
      return (
        <div className="Quiz" key={i}>
          <h1 className="Quiz_h1">{el.quiz_name}</h1>
          {el.totalqnum < 1 ? (
            <div>
              you haven't taken this Quiz
              <div>
                <FlatButton
                  onClick={() => this.takeQuiz(el.quiz_id)}
                  label="take a quiz"
                />
              </div>
            </div>
          ) : (
            <div>
              {el.correctnum} / {el.totalqnum}
              <div>
                <FlatButton
                  onClick={() => this.review(el.quiz_id)}
                  label="review"
                />
              </div>
            </div>
          )}
        </div>
      );
    });

    return displayQuizs;
  }
}

const mapStateToProps = state => {
  return {
    ...state.quizReducer
  };
};
export default withRouter(
  connect(mapStateToProps, { getQuestions, getResult })(Quiz)
);
