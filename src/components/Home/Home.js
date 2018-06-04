import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getClassroom } from "../../ducks/classRoomReducer";

class Home extends Component {
  componentDidMount() {}
  render() {
    console.log(this.props);
    const { myClassRooms, joinedClasses, getClassroom } = this.props;
    const myJoinedClasses = joinedClasses
      ? joinedClasses.map((e, i) => {
          return (
            <Link
              key={i}
              to={`/classroom/${e.classroom_id}`}
              onClick={() => {
                getClassroom(e.classroom_id);
              }}
            >
              <div className="home_class">{e.title}</div>
            </Link>
          );
        })
      : null;

    const myCreatedClass = myClassRooms
      ? myClassRooms.map((e, i) => {
          return (
            <Link
              key={i}
              to={`/classroom/${e.classroom_id}`}
              onClick={() => {
                getClassroom(e.classroom_id);
              }}
            >
              <div className="home_class">{e.title}</div>
            </Link>
          );
        })
      : null;
    console.log(this.props);
    return (
      <div className="home_view">
        <div className="main_title_home">
          Welcome, {this.props.user.first_name}.
        </div>
        <div className="title_home">Joined Classes</div>
        <div className="underline" />
        <div className="class_link" data-cy-joined-classes>
          {myJoinedClasses}
        </div>
        <div className="title_home">Created Classes</div>
        <div className="underline" />
        <div className="class_link" data-cy-created-classes>
          {myCreatedClass}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    myClassRooms: state.classRoomReducer.classRooms,
    joinedClasses: state.classRoomReducer.joinedClasses
  };
}
export default withRouter(connect(mapStateToProps, { getClassroom })(Home));
