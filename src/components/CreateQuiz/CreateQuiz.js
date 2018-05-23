import React from "react";

class CreateQuiz extends React.Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: "",
      questions: [{ question: "", answer: "" }]
    };

    // this.handleAddQuestionBox = this.handleAddQuestionBox.bind(this);
    // this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange = index => e => {
    const newQuestions = this.state.questions.map((quest, sidx) => {
      if (index !== sidx) return quest;
      return { ...quest, question: e.target.value };
    });

    this.setState({ questions: newQuestions });
  };

  handleAddQuestionBox = () => {
    this.setState({
      questions: this.state.questions.concat([{ question: "", answer: "" }])
    });
  };

  handleRemove = index => () => {
    this.setState({
      questions: this.state.questions.filter((s, sidx) => index !== sidx)
    });
  };

  render() {
    console.log(this.state);
    return (
      <form>
        <h4>Quiz Creator</h4>

        {this.state.questions.map((question, index) => (
          <div className="quiz-box">
            <input
              type="text"
              placeholder={`Question #${index + 1}`}
              // value={this.questions.question}
              onChange={this.handleChange(index)}
            />
            <input
              type="text"
              placeholder={`Answer #${index + 1}`}
              // value={this.state.answer}
              onChange={this.handleChange(index)}
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
