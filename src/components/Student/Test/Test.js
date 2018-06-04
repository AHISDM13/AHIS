import React from "react";
import "./Test.css";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { getResult } from "../../../ducks/studentReducer";
import transitions from "@material-ui/core/styles/transitions";
class Test extends React.Component {
  state = {};
  submit = () => {
    const { currentQuiz, getResult, user, history } = this.props;
    let results = [];
    let quiz_id = currentQuiz[0].quiz_id;
    currentQuiz.forEach((el, i) => {
      let question_id = el.question_id;
      let user_answer = this.state[el.question_id];
      let user_id = user.id;
      let correct = this.state[el.question_id] === el.answer ? true : false;

      axios
        .post("/api/result", {
          question_id,
          user_answer,
          user_id,
          quiz_id,
          correct
        })
        .then(result => {
          results.push(result.data);
          results.length === currentQuiz.length
            ? getResult(quiz_id).then(() =>
                history.push(`/test/${quiz_id}/result`)
              )
            : null;
        });
    });
  };
  handleChange = (val, question_id) => {
    this.setState(() => ({
      [question_id]: val
    }));
  };
  render() {
    const { currentQuiz, match } = this.props;
    const styles = {
      correct: {
        color: "#0052CC",
        fontWeight: "bold"
      }
    };
    console.log(this.state, currentQuiz);
    const howManyQleft = currentQuiz.length - Object.keys(this.state).length;
    const displayQuestionsInCurrentQuiz =
      match.params.quiz_type === "Multiple Choice"
        ? currentQuiz.map((el, i) => {
            return (
              <div className="Test" key={i}>
                <p className="Test_Q">
                  <span className="Test_index">Q{i + 1}.</span> {el.question}
                </p>
                <div className="Text_A">
                  <p
                    style={
                      this.state[el.question_id] === el.answer
                        ? styles.correct
                        : null
                    }
                    onClick={() => this.handleChange(el.answer, el.question_id)}
                  >
                    {el.answer}
                  </p>
                  <p
                    style={
                      this.state[el.question_id] === el.dummy_data_a
                        ? styles.correct
                        : null
                    }
                    onClick={() =>
                      this.handleChange(el.dummy_data_a, el.question_id)
                    }
                  >
                    {el.dummy_data_a}
                  </p>
                  <p
                    style={
                      this.state[el.question_id] === el.dummy_data_b
                        ? styles.correct
                        : null
                    }
                    onClick={() =>
                      this.handleChange(el.dummy_data_b, el.question_id)
                    }
                  >
                    {el.dummy_data_b}
                  </p>
                  <p
                    style={
                      this.state[el.question_id] === el.dummy_data_c
                        ? styles.correct
                        : null
                    }
                    onClick={() =>
                      this.handleChange(el.dummy_data_c, el.question_id)
                    }
                  >
                    {el.dummy_data_c}
                  </p>
                </div>
              </div>
            );
          })
        : currentQuiz.map((el, i) => {
            return (
              <div className="Test" key={i}>
                <p className="Test_Q">
                  <span className="Test_index">Q{i + 1}.</span> {el.question}
                </p>
                <div className="Text_A">
                  <input
                    type="text"
                    placeholder="type in your answer"
                    onChange={e =>
                      this.handleChange(e.target.value, el.question_id)
                    }
                  />
                </div>
              </div>
            );
          });

    return (
      <div>
        {currentQuiz.length < 1 || null ? (
          "oops no questions to solve"
        ) : (
          <div className="Test_outer">
            <div className="Test_header">
              <p className="howManyQleft">
                {howManyQleft > 1
                  ? `You have ${howManyQleft} questions left`
                  : howManyQleft === 1
                    ? "you have only one question left"
                    : "Congrats! you compelete the test. click submit to finish"}{" "}
              </p>
              <div className="processBar_outer">
                <div
                  className="processBar"
                  style={{
                    width: `${Object.keys(this.state).length /
                      currentQuiz.length *
                      100}%`,
                    transition: "width 1s",
                    background: `${
                      Object.keys(this.state).length === currentQuiz.length
                        ? "#ffab00"
                        : "#FFE380"
                    }`
                  }}
                />
              </div>
            </div>
            <div className="Test_body">
              {displayQuestionsInCurrentQuiz}
              <Button
                variant="raised"
                onClick={() => this.submit()}
                color="primary"
              >
                submit
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentQuiz: state.quizReducer.question,
    user: state.userReducer.user
  };
};
export default withRouter(connect(mapStateToProps, { getResult })(Test));
