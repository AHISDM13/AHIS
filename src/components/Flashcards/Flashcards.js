import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { getQuestions } from "../../ducks/quizReducer";

class Flashcards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: []
    };
  }
  componentDidMount() {
    this.props.getQuestions(78);
  }
  getNext() {}
  render() {
    console.log(this.props);
    let questions = this.props.question.map((e, i) => {
      return (
        <Card
          key={e.question_id}
          ques={e.question}
          answer={e.answer}
          quizNo={e.quiz_id}
        />
      );
    });
    return (
      <div>
        <h2>Card Row</h2>
        {/* <div className="small-cards">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div> */}
        {questions}
        <div>
          <i className="fas fa-arrow-alt-circle-left fa-3x" />
          <i className="fas fa-arrow-alt-circle-right fa-3x" />
          <p>skip</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.quizReducer };
}
export default connect(mapStateToProps, { getQuestions })(Flashcards);
