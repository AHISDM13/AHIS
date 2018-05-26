import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { createQuiz } from "../../ducks/quizReducer";

class CreateQuiz extends React.Component {
  state = {
    quizName: ""
  };
  handleQuizName = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { quizName } = this.state;
    const { createQuiz, match } = this.props;
    console.log(this);
    return (
      <div className="quiz">
        <div className="createquiz">
          <h1 className="title">Create Quiz</h1>
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
                placeholder="Name Your Classroom"
                value={quizName}
                onChange={this.handleQuizName}
                required
              />
            </div>
            <button
              onClick={e => {
                createQuiz(match.params.id, quizName).then(
                  swal({
                    title: "Your Classroom has been created.",
                    text: "Let's create a quiz.",
                    icon: "success",
                    button: "Create Quiz"
                  })
                );
              }}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    classid: state.classRoomReducer.classRoom.classroom_id
  };
};

export default withRouter(connect(mapStateToProps, { createQuiz })(CreateQuiz));
