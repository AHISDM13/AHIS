import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
import { withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import * as routes from "../../constants/routes";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
class Home extends Component {
  render() {
    console.log(this.props.user);
    const { location } = this.props;
    return (
      <div>
        <Nav />
        {
          (location.pathname = "/home" ? (
            <div className="Home" />
          ) : (
            <Router>
              <Route
                exact
                path={routes.PROFILE}
                component={() => <Profile />}
              />
            </Router>
          ))
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
}
export default withRouter(connect(mapStateToProps)(Home));
