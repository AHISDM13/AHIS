import React from "react";
import "./Review.css";
import { connect } from "react-redux";
class Review extends React.Component {
  render() {
    const { currentTestResult } = this.props;
    const styles = {
      wrong: {
        border: "1px solid red"
      }
    };
    // console.log(currentTestResult);
    const displayTestResult = currentTestResult.map((el, i) => {
      return (
        <div
          className="Review"
          key={i}
          style={el.correct ? null : styles.wrong}
        >
          <p className="Test_Q">
            <span className="Test_index"> Q{i + 1}.</span> {el.question}{" "}
          </p>
          <p> correct answer : {el.answer} </p>
          <p> your answer : {el.user_answer}</p>
        </div>
      );
    });
    return <div className="Review_outer">{displayTestResult}</div>;
  }
}
const mapStateToProps = state => {
  return {
    ...state.studentReducer
  };
};
export default connect(mapStateToProps)(Review);
