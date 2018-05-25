import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Student from "../Classroom/ClassView/Student/Student";
class Classroom extends React.Component {
  state = {};

  componentDidMount() {}
  render() {
    console.log(this.props.match.params.id);
    const { match, user } = this.props;
    return (
      <div className="Classroom">
        <Student />
        {/* {match.params.id === user.id ? (
          <p>display class for class creator</p>
        ) : (
          <div>
            <Student />
            <p>display class for the users who joined this class</p>
          </div>
        )} */}
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
