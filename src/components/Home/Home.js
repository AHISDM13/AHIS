import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
import { withRouter, Switch, Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import CreateClassroom from "../Classroom/CreateClassroom";
class Home extends Component {
  render() {
    console.log(this.props);
    const { location } = this.props;
    return (
      <div>
        <Nav />

        <div>
          <Switch>
            <Route exact path={routes.PROFILE} component={() => <Profile />} />
            <Route
              exact
              path={routes.CREATECLASS}
              component={() => <CreateClassroom />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    classRooms: state.classRoomReducer.classRooms
  };
}
export default withRouter(connect(mapStateToProps)(Home));
