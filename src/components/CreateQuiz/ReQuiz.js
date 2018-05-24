import React, { Component } from "react";

class ReQuiz extends Component {
  constructor() {
    super();

    this.state = {
      question: [],
      answer: []
    };
  }

  handleQuestion(val) {
    this.setState({
      question: val
    });
  }

  handleAnswer(val) {
    this.setState({
      answer: val
    });
  }

  addToQuiz(e) {
    e.preventDefault();
    this.setState({
      question: { ...this.state.question, answer }
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <form>
            <button onClick={() => this.addToQuiz()}>Submit</button>
            <h1>Questions</h1>
            <input onChange={e => this.handleQuestion(e.target.value)} />
            <h1>Answers</h1>
            <input onChange={e => this.handleAnswer(e.target.value)} />
          </form>
        </div>
        <div>
          <h1>Quiz Box</h1>
        </div>
      </div>
    );
  }
}

export default ReQuiz;
