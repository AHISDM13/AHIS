import React from "react";
import { connect } from "react-redux";
import { submitClassRoom, getOwnerClasses } from "../../ducks/classRoomReducer";
import swal from "sweetalert";
// import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import "./CreateClassroom.css";
import class_img from "./class.png";
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
    console.log(this.props);
    const { classTitle, password, subject } = this.state;
    const { user, submitClassRoom } = this.props;
    const btnEnabled = classTitle.length > 0;
    return (
      <div data-cy-create-class-page className="createclass">
        <div className="createclass_container">
          <img src={class_img} alt="classroom" />

          <h1 className="classroom_header">Create Classroom</h1>

          <form
            className="pure-form pure-form-aligned"
            onSubmit={e => e.preventDefault()}
          >
            <div className="pure-control-group">
              <label>Classroom Name</label>
              <input
                data-cy-inputbox-name
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
                data-cy-inputbox-cpassword
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
                data-cy-selection
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
              className="createclass_button"
              data-cy-actualcreate-button
              disabled={!btnEnabled}
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
                  .then(classr => {
                    this.props.history.push(
                      `/classroom/${this.props.classRooms[0].classroom_id}`
                    );
                  })
                  .then(() => {
                    this.props.getOwnerClasses(this.props.user.id);
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
  connect(
    mapStateToProps,
    { submitClassRoom, getOwnerClasses }
  )(CreateClassroom)
);
