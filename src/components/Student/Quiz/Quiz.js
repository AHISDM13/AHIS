import React from "react";
import "./Quiz.css";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getQuestions } from "../../../ducks/quizReducer";
import { getResult } from "../../../ducks/studentReducer";
import know from "./knowledge.png";
class Quiz extends React.Component {
  takeQuiz(quiz_id, quiz_type) {
    const { history, getQuestions } = this.props;
    getQuestions(quiz_id).then(() =>
      history.push(`/test/${quiz_id}/${quiz_type}`)
    );
  }
  review(quiz_id) {
    const { history, getResult } = this.props;
    getResult(quiz_id).then(() => {
      history.push(`/test/${quiz_id}/result`);
    });
  }
  render() {
    console.log(this.props);
    const { quizs } = this.props;
    const displayQuizs = quizs.map((el, i) => {
      return (
        <div className="Quiz" key={i}>
          <h1 className="Quiz_h1">Quiz {i + 1}</h1>
          <h1 className="Quiz_h1">{el.quiz_name}</h1>
          <img src={know} alt="thought" />
          {el.totalqnum < 1 ? (
            <div>
              <p>you haven't taken this quiz</p>
              <div className="Quiz_button_container">
                <Button
                  className="Quiz_button"
                  onClick={() => this.takeQuiz(el.quiz_id)}
                >
                  take quiz
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {el.correctnum} / {el.totalqnum}
              <div className="Quiz_button_container">
                <Button
                  className="Quiz_button"
                  onClick={() => this.review(el.quiz_id)}
                >
                  review
                </Button>
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
  return {};
};
export default withRouter(
  connect(
    mapStateToProps,
    { getQuestions, getResult }
  )(Quiz)
);
