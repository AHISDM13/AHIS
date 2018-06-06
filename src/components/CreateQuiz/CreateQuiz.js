import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { createQuiz } from "../../ducks/quizReducer";
import { Link } from "react-router-dom";
import "./CreateQuiz.css";
import class_img from "../Classroom/class.png";

class CreateQuiz extends React.Component {
  state = {
    quizName: "",
    quizType: "Multiple Choice"
  };
  handleQuizName(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  render() {
    const { quizName, quizType } = this.state;
    const { createQuiz, match } = this.props;
    const btnEnabled = quizName.length > 0;
    // console.log(this);
    return (
      <div className="quiz">
        <div className="createquiz">
          <img src={class_img} alt="classroom" />
          <h1 className="title">Create A Quiz</h1>
          <form
            className="pure-form pure-form-aligned"
            onSubmit={e => e.preventDefault()}
          >
            <div className="pure-control-group">
              <label>Quiz Name</label>
              <input
                type="text"
                id="Class Name"
                name="quizName"
                placeholder="Name Your Quiz"
                value={quizName}
                onChange={e => this.handleQuizName("quizName", e.target.value)}
                required
              />
            </div>
            <div className="pure-control-group">
              <label>Quiz Type </label>
              <select
                id="quiz type"
                name="quiz type"
                value={quizType}
                onChange={e => this.handleQuizName("quizType", e.target.value)}
              >
                <option>Multiple Choice</option>
                <option>Fill In The Blank</option>
              </select>
            </div>
            <Link to={`/requiz`}>
              <button
                className="create"
                disabled={!btnEnabled}
                onClick={e => createQuiz(match.params.id, quizName, quizType)}
              >
                Create
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    classid: state.classRoomReducer.classRooms.classroom_id,
    quiz: state.quizReducer.quiz
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createQuiz }
  )(CreateQuiz)
);
