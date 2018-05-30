import React from "react";
import "./Review.css";
import { connect } from "react-redux";
class Review extends React.Component {
  render() {
    const { currentTestResult } = this.props;
    const styles = {
      wrong: {
        border: "1px solid red"
      },
      correct: {
        border: "1px solid blue"
      }
    };
    console.log(currentTestResult);
    const displayTestResult = currentTestResult.map((el, i) => {
      return (
        <div
          className="Review"
          key={i}
          style={el.correct ? styles.correct : styles.wrong}
        >
          <p> q :{el.question} </p>
          <p> correct answer : {el.answer} </p>
          <p> your answer : {el.user_answer}</p>
        </div>
      );
    });
    return displayTestResult;
  }
}
const mapStateToProps = state => {
  return {
    ...state.studentReducer
  };
};
export default connect(mapStateToProps)(Review);
