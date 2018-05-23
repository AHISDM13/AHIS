import React, { Component } from "react";

export default class QuizQuestion extends Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: ""
    };
  }

  handleChangeQuestion = val => {
    // const newQuestions = this.state.questions.map((quest, sidx) => {
    //   if (index !== sidx) return quest;
    //   return { ...quest, question: e.target.value };
    // });

    this.setState({
      question: val
    });
  };

  handleChangeAnswer = val => {
    // const newAnswer = this.state.questions.map((answers, sidx) => {
    //   if (index !== sidx) return answers;
    //   return { ...answers, answer: e.target.value };
    // });

    this.setState({
      answer: val
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="quiz-box">
        <input
          type="text"
          placeholder={`Question`}
          onChange={e => this.handleChangeQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder={`Answer`}
          onChange={e => this.handleChangeAnswer(e.target.value)}
        />
        <button
          type="button"
          onClick={() => this.props.handleRemove(this.props.id)}
        >
          remove
        </button>
      </div>
    );
  }
}
