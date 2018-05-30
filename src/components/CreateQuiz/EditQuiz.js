import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getQuestions,
  changeQuestions,
  handleDeleteQuestion
} from "../../ducks/quizReducer";
import { withRouter, Link } from "react-router-dom";
import QuestionCard from "./QuestionCard";

class EditQuiz extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  componentDidMount() {
    this.props.getQuestions(this.props.match.params.id);
  }

  handleChange(id, answer, question, a, b, c) {
    this.props.changeQuestions(id, answer, question, a, b, c).then(() => {
      this.props.getQuestions(this.props.match.params.id);
    });
  }

  handleRemove(qid, quizid) {
    this.props.handleDeleteQuestion(qid, quizid);
  }

  render() {
    // console.log(this.props.question);
    if (!this.props.question) {
      return <div>Your quiz is deleted. Go back to create more quizes.</div>;
    }

    if (this.props.loading) {
      return <div> loading... </div>;
    }
    const questions = this.props.question.map((e, i) => {
      return (
        <QuestionCard
          key={e.question_id}
          handleChange={this.handleChange}
          question={e}
          handleRemove={this.handleRemove}
        />
      );
    });

    return (
      <div>
        <div>{questions}</div>
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
  connect(mapStateToProps, {
    getQuestions,
    changeQuestions,
    handleDeleteQuestion
  })(EditQuiz)
);
