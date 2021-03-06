import React, { Component } from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getClassroom } from "../../ducks/classRoomReducer";
import {getUserInfo} from "../../ducks/userReducer"
class Home extends Component {
  componentDidMount() {
    this.props.getUserInfo()
  }
  render() {
    console.log(this.props)
    const { myClassRooms, joinedClasses, getClassroom } = this.props;
    const myJoinedClasses = joinedClasses
      ? joinedClasses.map((e, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                getClassroom(e.classroom_id).then(() =>
                  this.props.history.push(`/classroom/${e.classroom_id}`)
                );
              }}
              data-cy-joinedclass
            >
              <div className="home_class">{e.title}</div>
            </div>
          );
        })
      : null;

    const myCreatedClass = myClassRooms
      ? myClassRooms.map((e, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                getClassroom(e.classroom_id).then(() =>
                  this.props.history.push(`/classroom/${e.classroom_id}`)
                );
              }}
            >
              <div className="home_class">{e.title}</div>
            </div>
          );
        })
      : null;
    return (
      <div className="home_view">
        <div className="main_title_home">
          Welcome, {this.props.user.username}.
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
export default withRouter(
  connect(
    mapStateToProps,
    { getClassroom,getUserInfo }
  )(Home)
);
