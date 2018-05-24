import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../firebase";

class SignOutButton extends React.Component {
  handleSignOut = () => {
    auth.doSignOut();
    this.props.history.push("/");
  };
  render() {
    return (
      <button type="button" onClick={this.handleSignOut}>
        Sign Out
      </button>
    );
  }
}

export default withRouter(SignOutButton);
