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
    const { question } = this.state;
    const quizsheet = this.quizsheet.value;

    this.setState({
      question: { ...this.state.question, quizsheet }
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <form
            onSubmit={e => {
              this.addToQuiz(e);
            }}
          >
            <button onClick={() => this.addToQuiz()}>Submit</button>
            <h1>Questions</h1>
            <input onChange={e => this.handleQuestion(e.target.value)} />
            <h1>Answers</h1>
            <input onChange={e => this.handleAnswer(e.target.value)} />
          </form>
        </div>
        <div>
          {this.state.question.map((e, i) => {
            return <ul key={i}>{e => this.state.question}</ul>;
          })}
          <h1>Quiz Box</h1>
          {/* <ul>{this.state.question}</ul> */}
        </div>
      </div>
    );
  }
}

export default ReQuiz;
