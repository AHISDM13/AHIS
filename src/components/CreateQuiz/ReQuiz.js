import React, { Component } from "react";
import { connect } from "react-redux";
import { addQuestion } from "../../ducks/quizReducer";

import TextField from "material-ui/TextField";

class ReQuiz extends Component {
  constructor() {
    super();

    this.state = {
      question: [],
      inputAnswer: "",
      inputQuestion: "",
      dummy_data_a: "",
      dummy_data_b: "",
      dummy_data_c: "",
      flag: false
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

  multipleChoiceFlag() {
    this.setState({
      flag: true
    });
  }

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
    console.log(ind);
    let removeQues = this.state.question.slice();
    let removed = removeQues.filter((ques, index) => ind !== index);
    console.log(removed);
    this.setState({
      question: removed
    });
  };

  postQuestion() {
    const { quiz_id } = this.props.quiz;
    let newentry = this.state.question.map((e, i) => {
      console.log(e);
      this.props.addQuestion(quiz_id, e.Q, e.A, e.One, e.Two, e.Three);
    });
    // console.log(newentry);
    return newentry;
  }

  render() {
    // console.log(this.props);

    let ques = this.state.question.map((quest, i) => {
      return (
        <div key={i}>
          <div> value={quest.Q} </div> <div>Answer: {quest.A}</div>{" "}
          <div> False answer: {quest.One} </div>{" "}
          <div>False answer: {quest.Two}</div>{" "}
          <div>False answer: {quest.Three} </div>
          <button onClick={() => this.removeQuestion(i)}>Remove</button>
        </div>
      );
    });
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmitQuestion}>
            <input type="submit" value="Submit" />
            <h1>Create Question</h1>
            <input
              value={this.state.inputQuestion}
              onChange={e => this.handleQuestion(e.target.value)}
              placeholder="Type question here"
            />
            <h1>Create Answer</h1>
            <input
              value={this.state.inputAnswer}
              onChange={e => this.handleAnswer(e.target.value)}
              placeholder="Type answer here"
            />
            <div className="dummy answers">
              <h1>Dummy 1</h1>
              <input
                value={this.state.dummy_data_a}
                onChange={e => this.dummyOne(e.target.value)}
                placeholder="Optional for multiple choice"
              />
              <h1>Dummy 2</h1>
              <input
                value={this.state.dummy_data_b}
                onChange={e => this.dummyTwo(e.target.value)}
                placeholder="Optional for multiple choice"
              />
              <h1>Dummy 3</h1>
              <input
                value={this.state.dummy_data_c}
                onChange={e => this.dummyThree(e.target.value)}
                placeholder="Optional for multiple choice"
              />
            </div>{" "}
          </form>
        </div>
        <div>
          <h1>Quiz Box {ques}</h1>
        </div>
        <button onClick={() => this.postQuestion()}>Create Quiz </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.quizReducer
  };
}
export default connect(mapStateToProps, { addQuestion })(ReQuiz);
