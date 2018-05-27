import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TeacherView from "./ClassView/Teacher View/TeacherView";
import Student from "./ClassView/Student/Student";

class Classroom extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    console.log(this.props.match.params.id);
    const { match, user } = this.props;
    return (
      <div className="Classroom">
        {/* {match.params.id === user.id ? (
          <p>display class for class creator</p>
        ) : (
          <p>display class for the users who joined this class</p>
        )} */}
        {/* <TeacherView /> */}
        <Student />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};
export default withRouter(connect(mapStateToProps)(Classroom));
