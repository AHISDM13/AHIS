import React from "react";
import "./Test.css";
import { connect } from "react-redux";
import { FlatButton } from "material-ui";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { getResult } from "../../../ducks/studentReducer";
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
    const { currentQuiz } = this.props;
    // console.log(this.state, currentQuiz);
    const displayQuestionsInCurrentQuiz = currentQuiz.map((el, i) => {
      return (
        <div className="Test" key={i}>
          {i + 1}.
          <div className="Test_Q">Q - {el.question}</div>
          <div className="Text_A">
            A -
            <input
              type="text"
              onChange={e => this.handleChange(e.target.value, el.question_id)}
            />
          </div>
        </div>
      );
    });

    return (
      <div>
        {displayQuestionsInCurrentQuiz}
        <div>
          <FlatButton label="submit" onClick={() => this.submit()} />
        </div>
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
