import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { getQuestions } from "../../ducks/quizReducer";

class Flashcards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: [],
      ind: 0
    };
    this.handleCard = this.handleCard.bind(this);
  }
  componentDidMount() {
    this.props.getQuestions(78);
  }
  handleCard() {
    this.setState((prevState, props) => ({
      ind: prevState.ind + 1
    }));
  }
  render() {
    console.log(this.state.ind);
    let questions = this.props.question.map((e, i) => {
      return (
        <Card
          key={e.question_id}
          ind={this.state.ind}
          cardInd={i}
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
          <i
            onClick={this.handleCard}
            className="fas fa-arrow-alt-circle-left fa-3x"
          />
          <i
            onClick={this.handleCard}
            className="fas fa-arrow-alt-circle-right fa-3x"
          />
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
