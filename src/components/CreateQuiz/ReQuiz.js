import React, { Component } from "react";

class ReQuiz extends Component {
  constructor() {
    super();

    this.state = {
      question: ["question1", "quesiton2", "question3"],
      answer: ["answer1", "answer2", "answer3"]
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

  render() {
    return (
      <div>
        <div>
          <form>
            {/* <button onClick={() => this.addToQuiz()}>Submit</button> */}
            <h1>Questions</h1>
            <input onChange={e => this.handleQuestion(e.target.value)} />
            <h1>Answers</h1>
            <input onChange={e => this.handleAnswer(e.target.value)} />
          </form>
        </div>
        <div>
          <h1>Quiz Box</h1>
          <button onClick = { () =>  {this.state.question.map(ques => {
            return (
              <div>
                <ul key={ques}>{ques}</ul>
              </div>
            );
          })}
          </button>
        </div>
        <div>
          {this.state.answer.map(ans => {
            return (
              <div>
                <ul key={ans}>{ans}</ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ReQuiz;
