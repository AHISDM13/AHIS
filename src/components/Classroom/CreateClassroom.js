import React from "react";
import { connect } from "react-redux";
import { submitClassRoom } from "../../ducks/classRoomReducer";

class CreateClassroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "",
      password: "",
      subject: ""
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
      <div>
        Create Classroom
        <form>
          <div class="row">
            <label>Class Room Name</label>
            <input
              type="text"
              id="Class Name"
              placeholder="Name Your Classroom"
              value={this.state.className}
              onChange={e => this.handleClassRoom("className", e.target.value)}
            />
          </div>
          <div class="row">
            <label>Password</label>
            <input
              type="text"
              id="Class Pass"
              placeholder="Classroom Password"
              value={this.state.password}
              onChange={e => this.handleClassRoom("password", e.target.value)}
            />
          </div>
          <div>
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
              this.props.submitClassRoom(
                this.state.className,
                this.state.password,
                this.state.subject
              );
            }}
          >
            Create
          </button>
        </form>
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
