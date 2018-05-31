import React, { Component } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { getQuiz, getQuestions } from "../../ducks/quizReducer";
import "./Flashcard.css";

class Flashcards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: [],
      ind: 0,
      showHelp: true
    };
    this.handleCard = this.handleCard.bind(this);
    this.firstClick = this.firstClick.bind(this);
  }
  componentDidMount() {
    this.props.getQuiz(47);
  }
  handleCard() {
    this.setState((prevState, props) => ({
      ind: prevState.ind + 1
    }));
  }
  firstClick() {
    this.setState({ showHelp: false });
  }
  render() {
    console.log(this.props);
    if (this.props.loading) {
      return <div>is loading...</div>;
    }
    let quizList = this.props.quiz.map((e, i) => {
      return (
        <div
          onClick={() => this.props.getQuestions(e.quiz_id)}
          key={i}
          className="small-card"
        >
          {e.quiz_name}
        </div>
      );
    });

    let questions = this.props.question.map((e, i) => {
      return (
        <Card
          showHelp={this.state.showHelp}
          key={e.question_id}
          ind={this.state.ind}
          cardInd={i}
          ques={e.question}
          answer={e.answer}
          firstClick={this.firstClick}
        />
      );
    });
    return (
      <div className="flashcard-page">
        {/* <h3>Select a deck</h3> */}
        <div className="smallcard-row">{quizList}</div>
        <div className="flash_holder">
          {this.props.question.length ? questions : ""}
          <div className="icons">
            {this.props.question.length ? (
              <i
                onClick={this.handleCard}
                className="fas fa-arrow-alt-circle-left fa-3x arrows"
              />
            ) : (
              ""
            )}
            {this.state.ind < this.props.question.length - 1 ? (
              <i
                onClick={this.handleCard}
                className="fas fa-arrow-alt-circle-right fa-3x arrows"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.quizReducer };
}
export default connect(mapStateToProps, { getQuiz, getQuestions })(Flashcards);
