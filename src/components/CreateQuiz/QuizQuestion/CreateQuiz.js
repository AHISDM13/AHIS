import React, { Component } from "react";
import QuizQuestion from "../QuizQuestion";

class CreateQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      question: props.question,
      answer: props.answer,
      questions: [{ id: 1, question: "", answer: "" }]
    };
  }

  // handleChangeQuestion = (index, e) => {
  //   const newQuestions = this.state.questions.map((quest, sidx) => {
  //     if (index !== sidx) return quest;
  //     return { ...quest, question: e.target.value };
  //   });

  //   this.setState({
  //     questions: newQuestions
  //   });
  // };

  // handleChangeAnswer = (index, e) => {
  //   const newAnswer = this.state.questions.map((answers, sidx) => {
  //     if (index !== sidx) return answers;
  //     return { ...answers, answer: e.target.value };
  //   });

  //   this.setState({
  //     questions: newAnswer
  //   });
  // };

  handleAddQuestionBox = () => {
    console.log(this.props.question);
    this.setState({
      questions: this.state.questions.concat([
        {
          id: this.state.id + 1,
          question: this.props.question,
          answer: this.props.answer
        }
      ]),
      id: this.state.id + 1
    });
  };

  handleRemove = ind => {
    console.log(this.props.question);
    console.log(ind);
    let newArr = this.state.questions.filter(e => {
      console.log(e.id, ind);
      return e.id !== ind;
    });
    console.log(newArr);
    this.setState({
      questions: newArr
    });
  };

  render() {
    return (
      <form>
        <h4>Quiz Creator</h4>

        {this.state.questions.map(el => (
          <QuizQuestion
            key={el.id}
            id={el.id}
            question={el.question}
            answer={el.answer}
            handleRemove={this.handleRemove}
          />
          // <div className="quiz-box" key={index}>
          //   <input
          //     type="text"
          //     placeholder={`Question #${index + 1}`}
          //     onChange={e => this.handleChangeQuestion(index, e)}
          //   />
          //   <input
          //     type="text"
          //     placeholder={`Answer #${index + 1}`}
          //     onChange={e => this.handleChangeAnswer(index, e)}
          //   />
          //   <button type="button" onClick={() => this.handleRemove(index)}>
          //     remove
          //   </button>
          // </div>
        ))}
        <button type="button" onClick={() => this.handleAddQuestionBox()}>
          Add New Question Box
        </button>
        <button>Create Quiz</button>
      </form>
    );
  }
}

export default CreateQuiz;
