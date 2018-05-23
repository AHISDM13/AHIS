import React from "react";
import { connect } from "react-redux";
import { submitClassRoom } from "../../ducks/classRoomReducer";
import swal from "sweetalert";
import "./CreateClassroom.css";

class CreateClassroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "",
      password: "",
      subject: "Math"
    };
    this.handleClassRoom = this.handleClassRoom.bind(this);
  }

  handleClassRoom(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="classroom">
        <div className="createclass">
          <h1 className="title">Create Classroom</h1>
          <form
            class="pure-form pure-form-aligned"
            onSubmit={e => e.preventDefault()}
          >
            <div class="pure-control-group">
              <label>Class Room Name</label>
              <input
                type="text"
                id="Class Name"
                placeholder="Name Your Classroom"
                value={this.state.className}
                onChange={e =>
                  this.handleClassRoom("className", e.target.value)
                }
                required
              />
            </div>
            <div class="pure-control-group">
              <label>Password</label>
              <input
                type="text"
                id="Class Pass"
                placeholder="Classroom Password"
                value={this.state.password}
                onChange={e => this.handleClassRoom("password", e.target.value)}
              />
            </div>
            <div class="pure-control-group">
              <label>Subject</label>
              <select
                id="subject"
                name="subject"
                value={this.state.subject}
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
                this.props
                  .submitClassRoom(
                    this.state.className,
                    this.state.password,
                    this.state.subject
                  )
                  .then(
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
    className: state.className,
    password: state.password,
    subject: state.subject
  };
};

export default connect(mapStateToProps, { submitClassRoom })(CreateClassroom);
