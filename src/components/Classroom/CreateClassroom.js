import React from "react";
import { connect } from "react-redux";
import { submitClassRoom } from "../../ducks/classRoomReducer";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import "./CreateClassroom.css";
class CreateClassroom extends React.Component {
  state = {
    classTitle: "",
    ////I changed this to classtitle cause className is a built in keyword
    password: "",
    subject: "Math"
  };
  handleClassRoom(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  render() {
    const { classTitle, password, subject } = this.state;
    const { user, submitClassRoom } = this.props;
    return (
      <div className="classroom">
        <div className="createclass">
          <h1 className="title">Create Classroom</h1>
          <form
            className="pure-form pure-form-aligned"
            onSubmit={e => e.preventDefault()}
          >
            <div className="pure-control-group">
              <label>Class Room Name</label>
              <input
                type="text"
                id="Class Name"
                placeholder="Name Your Classroom"
                value={classTitle}
                onChange={e =>
                  this.handleClassRoom("classTitle", e.target.value)
                }
                required
              />
            </div>
            <div className="pure-control-group">
              <label>Password</label>
              <input
                type="text"
                id="Class Pass"
                placeholder="Classroom Password"
                value={password}
                onChange={e => this.handleClassRoom("password", e.target.value)}
              />
            </div>
            <div className="pure-control-group">
              <label>Subject</label>
              <select
                id="subject"
                name="subject"
                value={subject}
                onChange={e => this.handleClassRoom("subject", e.target.value)}
              >
                <option>Math</option>
                <option>Science</option>
                <option>Social Studies</option>
                <option>Language</option>
              </select>
            </div>

            <button
              onClick={e => {
                submitClassRoom(user.id, classTitle, password, subject)
                  .then(
                    swal({
                      title: "Your Classroom has been created.",
                      text: "Let's go to your classroom.",
                      icon: "success",
                      button: "Go to Class"
                    })
                  )
                  .then(() => {
                    this.props.history.push(
                      `/classroom/${this.props.classRooms.classroom_id}`
                    );
                  });
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
    classRooms: state.classRoomReducer.classRooms
  };
};

export default withRouter(
  connect(mapStateToProps, { submitClassRoom })(CreateClassroom)
);
