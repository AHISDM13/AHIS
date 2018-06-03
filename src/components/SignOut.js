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
      <button
        type="button"
        style={{ background: "none", border: "none" }}
        onClick={this.handleSignOut}
        data-cy-sign-out
      >
        Sign Out
      </button>
    );
  }
}

export default withRouter(SignOutButton);
