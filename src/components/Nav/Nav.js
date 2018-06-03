import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { connect } from "react-redux";
import { getClassroom } from "../../ducks/classRoomReducer";
class Nav extends Component {
  state = { open: false, myclassesShow: false, joinedClassesShow: false };
  handleToggle = val => this.setState(() => ({ open: val }));
  handleMyclasses() {
    this.setState(() => ({ myclassesShow: !this.state.myclassesShow }));
  }
  handleJoinedClasses() {
    this.setState(() => ({ joinedClassesShow: !this.state.joinedClassesShow }));
  }
  componenDidMount() {}
  render() {
    const { classRooms, getClassroom, joinedClasses, history } = this.props;
    const displayJoinedClasses = joinedClasses
      ? joinedClasses.map((el, i) => {
          return (
            <p
              key={i}
              className="Nav_link_subItems"
              onClick={() => {
                this.handleToggle(false);
                getClassroom(el.classroom_id).then(classroom => {
                  history.push(`/classroom/${el.classroom_id}`);
                });
              }}
            >
              {el.title}[{el.subject}]
            </p>
          );
        })
      : null;
    const createdClasses = classRooms
      ? classRooms.map((e, i) => {
          return (
            <Link
              key={i}
              to={`/classroom/${e.classroom_id}`}
              className="Nav_link_subItems"
              onClick={() => {
                this.handleToggle(false);
                getClassroom(e.classroom_id);
              }}
            >
              {e.title}
            </Link>
          );
        })
      : null;
    return (
      <div className="Nav">
        <span className="hamburger">
          <a data-cy-navbutton onClick={() => this.handleToggle(true)}>
            &#9776;
          </a>
        </span>
        <Drawer
          open={this.state.open}
          onClose={() => this.handleToggle(false)}
          className="Nav_drawer"
        >
          <Link
            to="/home"
            className="Nav_link_1 Nav_link"
            onClick={() => this.handleToggle(false)}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="Nav_link"
            onClick={() => this.handleToggle(false)}
          >
            Profile
          </Link>
          <Link
            data-cy-create
            to="/createclass"
            className="Nav_link"
            onClick={() => this.handleToggle(false)}
          >
            Create Class
          </Link>
          <p className="Nav_link" onClick={() => this.handleMyclasses()}>
            My classes
          </p>
          {this.state.myclassesShow ? createdClasses : null}
          <p className="Nav_link" onClick={() => this.handleJoinedClasses()}>
            Joined classes
          </p>
          {this.state.joinedClassesShow ? displayJoinedClasses : null}
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    classRooms: state.classRoomReducer.classRooms,
    user: state.userReducer.user,
    joinedClasses: state.classRoomReducer.joinedClasses
  };
}

export default withRouter(connect(mapStateToProps, { getClassroom })(Nav));
