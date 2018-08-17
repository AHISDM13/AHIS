import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../firebase";
import "./SignOut.css"
class SignOutButton extends React.Component {
  handleSignOut = () => {
    auth.doSignOut();
    this.props.history.push("/");
  };

  render() {
    return (
      <button
        type="button"
        data-cy-signout
        className="sighoutbtn"
        onClick={this.handleSignOut}
        data-cy-sign-out
      >
        <i className="fas fa-sign-out-alt fa-2x" />
      </button>
    );
  }
}

export default withRouter(SignOutButton);
