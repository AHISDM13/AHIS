import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestions } from "../../ducks/quizReducer";
import { withRouter, Link } from "react-router-dom";
import QuestionCard from "./QuestionCard";

class EditQuiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      question: "",
      answer: "",
      dummy_data_a: "",
      dummy_data_b: "",
      dummy_data_c: ""
    };
  }
  componentDidMount() {
    this.props.getQuestions(this.props.match.params.id);
  }

  render() {
    console.log(this.props.question);
    const questions = this.props.question.map((e, i) => {
      return (
        <QuestionCard key={e.question_id} question={e} />
        // <div>
        //   <div key={e.question_id}>
        //     {e.dummy_data_a.length ? (
        //       <div> has data muliple choice</div>
        //     ) : (
        //       <div> no mulitple choice</div>
        //     )}
        //     <p>Question: {e.question}</p>
        //     <p>Answer: {e.answer}</p>
        //     <p>Multiple Choice Answer 1: {e.dummy_data_a}</p>
        //     <p>Multiple Choice Answer 2: {e.dummy_data_b}</p>
        //     <p>Multiple Choice Answer 3: {e.dummy_data_c}</p>
        //   </div>
        //   <div>
        //     <button onClick={() => this.changeFlag()}>
        //       {" "}
        //       edit question and answer{" "}
        //     </button>
        //     <button> save changes</button>
        //     <button> delete question and answer</button>
        //   </div>
        //   {this.state.flag && <input defaultValue={e.question} />}
        // </div>
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
