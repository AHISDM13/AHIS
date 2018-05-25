import React, { Component } from "react";
import { connect } from "react-redux";
import { addQuestion } from "../../ducks/quizReducer";

class ReQuiz extends Component {
  constructor() {
    super();

    this.state = {
      question: [],
      answer: [],
      inputAnswer: "",
      inputQuestion: ""
    };
    this.postQuestion = this.postQuestion.bind(this);
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

  handleSubmitQuestion = event => {
    const { question, inputAnswer, inputQuestion } = this.state;
    let newQ = { Q: inputQuestion, A: inputAnswer };
    let copy = question.slice();
    console.log(copy, newQ);
    copy.push(newQ);
    console.log(copy);
    this.setState(() => ({
      question: copy,
      inputQuestion: "",
      inputAnswer: ""
    }));
    event.preventDefault();
  };

  removeQuestion = ind => {
    console.log(ind);
    let removeQues = this.state.question.slice();
    let removed = removeQues.filter((ques, index) => ind !== index);
    console.log(removed);
    this.setState({
      question: removed
    });
  };

  postQuestion() {
    let newentry = this.state.question.map((e, i) => {
      this.props.addQuestion(e.Q, e.A);
    });
    return newentry;
  }

  render() {
    console.log(this.state);

    let ques = this.state.question.map((quest, i) => {
      return (
        <div key={i}>
          <p>
            {" "}
            {quest.Q} - {quest.A}{" "}
          </p>
          <button onClick={() => this.removeQuestion(i)}>Remove</button>
        </div>
      );
    });
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmitQuestion}>
            <input type="submit" value="Submit" />
            <h1>Questions</h1>
            <input
              value={this.state.inputQuestion}
              onChange={e => this.handleQuestion(e.target.value)}
            />
            <h1>Answers</h1>
            <input
              value={this.state.inputAnswer}
              onChange={e => this.handleAnswer(e.target.value)}
            />
          </form>
        </div>
        <div>
          <h1>Quiz Box {ques}</h1>
        </div>
        <button onClick={() => this.postQuestion()}>Submit Quiz </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}
export default connect(mapStateToProps, { addQuestion })(ReQuiz);
