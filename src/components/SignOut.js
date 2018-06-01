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
      >
        <i className="fas fa-sign-out-alt fa-2x" />
      </button>
    );
  }
}

export default withRouter(SignOutButton);
