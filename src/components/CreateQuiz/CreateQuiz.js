import React from "react";

class CreateQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: "",
      questions: [{ question: "", answer: "" }]
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleAddQuestionBox = this.handleAddQuestionBox.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChangeQuestion = index => e => {
    const newQuestions = this.state.questions.map((quest, sidx) => {
      if (index !== sidx) return quest;
      return { ...quest, question: e.target.value };
    });

    this.setState({ questions: newQuestions });
  };

  handleChangeAnswer = index => e => {
    const newAnswer = this.state.questions.map((answers, sidx) => {
      if (index !== sidx) return answers;
      return { ...answers, answer: e.target.value };
    });

    this.setState({ questions: newAnswer });
  };

  handleAddQuestionBox = () => {
    this.setState({
      questions: this.state.questions.concat([{ question: "", answer: "" }])
    });
  };

  handleRemove = index => () => {
    console.log(index);
    this.setState({
      questions: this.state.questions.filter((e, index) => e[index] === index)
    });
    return this.state.questions;
  };

  render() {
    console.log(this.state.questions);
    return (
      <form>
        <h4>Quiz Creator</h4>

        {this.state.questions.map((e, index) => (
          <div className="quiz-box">
            <input
              type="text"
              placeholder={`Question #${index + 1}`}
              onChange={this.handleChangeQuestion(index)}
            />
            <input
              type="text"
              placeholder={`Answer #${index + 1}`}
              onChange={this.handleChangeAnswer(index)}
            />
            <button
              type="button"
              onClick={this.handleRemove(index)}
              className="small"
            >
              remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddQuestionBox}
          className="small"
        >
          Add New Question Box
        </button>
        <button>Create Quiz</button>
      </form>
    );
  }
}

export default CreateQuiz;
