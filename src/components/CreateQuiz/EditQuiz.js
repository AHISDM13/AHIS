import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../../ducks/quizReducer";
import { withRouter, Link } from "react-router-dom";

class EditQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    };
  }
  componentDidMount() {
    this.props.getQuestions(this.props.match.params.id);
  }

  render() {
    console.log(this.props.question);
    const questions = this.props.question.map((e, i) => {
      return (
        <div key={e.question_id}>
          <p>{e.question}</p>
          <p>{e.answer}</p>
        </div>
      );
    });

    return <div>{questions}</div>;
  }
}

function mapStateToProps(state) {
  return {
    ...state.quizReducer
  };
}

export default withRouter(connect(mapStateToProps, { getQuestions })(EditQuiz));
