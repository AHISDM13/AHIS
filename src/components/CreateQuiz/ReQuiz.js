import React, { Component } from "react";
import { connect } from "react-redux";
import { addQuestion } from "../../ducks/quizReducer";
import "./ReQuiz.css";
import TextField from "material-ui/TextField";
import { withRouter } from "react-router-dom";

class ReQuiz extends Component {
  constructor() {
    super();

    this.state = {
      question: [],
      inputAnswer: "",
      inputQuestion: "",
      dummy_data_a: "",
      dummy_data_b: "",
      dummy_data_c: ""
    };
  }

  handleQuestion = val => {
    this.setState({
      inputQuestion: val
    });
  };

  handleAnswer = val => {
    this.setState({
      inputAnswer: val
    });
  };

  dummyOne = val => {
    this.setState({
      dummy_data_a: val
    });
  };

  dummyTwo = val => {
    this.setState({
      dummy_data_b: val
    });
  };

  dummyThree = val => {
    this.setState({
      dummy_data_c: val
    });
  };

  handleSubmitQuestion = event => {
    const {
      question,
      inputAnswer,
      inputQuestion,
      dummy_data_a,
      dummy_data_b,
      dummy_data_c
    } = this.state;
    let newQ = {
      Q: inputQuestion,
      A: inputAnswer,
      One: dummy_data_a,
      Two: dummy_data_b,
      Three: dummy_data_c
    };
    let copy = question.slice();
    // console.log(copy, newQ);
    copy.push(newQ);
    // console.log(copy);
    this.setState(() => ({
      question: copy,
      inputQuestion: "",
      inputAnswer: "",
      dummy_data_a: "",
      dummy_data_b: "",
      dummy_data_c: ""
    }));
    event.preventDefault();
  };

  removeQuestion = ind => {
    // console.log(ind);
    let removeQues = this.state.question.slice();
    let removed = removeQues.filter((ques, index) => ind !== index);
    // console.log(removed);
    this.setState({
      question: removed
    });
  };

  postQuestion() {
    const { quiz_id } = this.props.quiz;
    let newentry = this.state.question.map((e, i) => {
      // console.log(e);
      return this.props.addQuestion(quiz_id, e.Q, e.A, e.One, e.Two, e.Three);
    });
    console.log(newentry);
    Promise.all(newentry).then(response => {
      console.log(response);
      console.log(this.props.quiz);
      this.props.history.push(`/classroom/${this.props.quiz.classroom_id}`);
    });
    // return newentry;
  }

  render() {
    console.log(this.props);
    // console.log(this.props.quiz.quiz_type);
    let ques = this.state.question.map((quest, i) => {
      return (
        <div className="outer-quiz" key={i}>
          {this.props.quiz.quiz_type !== "Multiple Choice" ? (
            <div className="fill-in">
              <p> {quest.Q} ? </p> <p> {quest.A}</p>
              <button className="remove" onClick={() => this.removeQuestion(i)}>
                -
              </button>
            </div>
          ) : (
            <div className="fill-in">
              <div> Q: {quest.Q} </div> <div>A: {quest.A}</div>
              <div> F: {quest.One} </div>
              <div>F: {quest.Two}</div>
              <div>F: {quest.Three} </div>
              <button className="remove" onClick={() => this.removeQuestion(i)}>
                -
              </button>
            </div>
          )}
        </div>
      );
    });

    return (
      <div className="re-container">
        {this.props.quiz.quiz_type !== "Multiple Choice" ? (
          <div>
            <div className="fill-in-text">
              <h1 className="heading_requiz">Question</h1>
              <h1 className="heading_requiz">Answer</h1>
            </div>
            <form className="fill-in" onSubmit={this.handleSubmitQuestion}>
              <div className="fill-in-input">
                <input
                  className="inputbox-requiz"
                  value={this.state.inputQuestion}
                  onChange={e => this.handleQuestion(e.target.value)}
                  placeholder="Type question here"
                  autoFocus
                />

                <input
                  className="inputbox-requiz"
                  value={this.state.inputAnswer}
                  onChange={e => this.handleAnswer(e.target.value)}
                  placeholder="Type answer here"
                />
                <input type="submit" value="+" />
              </div>
            </form>
          </div>
        ) : (
          <div>
            <form className="fill-in" onSubmit={this.handleSubmitQuestion}>
              <h1 className="heading_requiz">Question</h1>
              <input
                className="inputbox-requiz"
                value={this.state.inputQuestion}
                onChange={e => this.handleQuestion(e.target.value)}
                placeholder="Type question here"
              />
              <h1 className="heading_requiz">Answer</h1>
              <input
                className="inputbox-requiz"
                value={this.state.inputAnswer}
                onChange={e => this.handleAnswer(e.target.value)}
                placeholder="Type answer here"
              />

              <h1 className="heading_requiz">Wrong Answer 1</h1>
              <input
                className="inputbox-requiz"
                value={this.state.dummy_data_a}
                onChange={e => this.dummyOne(e.target.value)}
                placeholder="Optional for multiple choice"
              />
              <h1 className="heading_requiz">Wrong Answer 2</h1>
              <input
                className="inputbox-requiz"
                value={this.state.dummy_data_b}
                onChange={e => this.dummyTwo(e.target.value)}
                placeholder="Optional for multiple choice"
              />
              <h1 className="heading_requiz">Wrong Answer 3</h1>
              <input
                className="inputbox-requiz"
                value={this.state.dummy_data_c}
                onChange={e => this.dummyThree(e.target.value)}
                placeholder="Optional for multiple choice"
              />
              <input type="submit" value="+" />
            </form>
          </div>
        )}

        <div>
          <h1 className="heading_requiz"> {ques}</h1>
        </div>
        <button
          className="create"
          onClick={() => {
            this.postQuestion();
          }}
        >
          Create Quiz
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.quizReducer
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    { addQuestion }
  )(ReQuiz)
);
