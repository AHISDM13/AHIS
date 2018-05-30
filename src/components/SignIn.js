import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SignUpLink } from "./SignUp";
import { auth } from "../firebase";
import * as routes from "../constants/routes";
import { connect } from "react-redux";
import { getUser } from "../ducks/userReducer";
import { getOwnerClasses, getJoinedClasses } from "../ducks/classRoomReducer";
import { get } from "https";
const SignInPage = ({
  history,
  getUser,
  getOwnerClasses,
  getJoinedClasses
}) => (
  <div>
    <SignInForm
      history={history}
      getUser={getUser}
      getOwnerClasses={getOwnerClasses}
      getJoinedClasses={getJoinedClasses}
    />
    <SignUpLink />
  </div>
);

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history, getUser, getOwnerClasses, getJoinedClasses } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        getUser(authUser.user.email).then(user => {
          let user_id = user.value.data.id;
          getOwnerClasses(user_id).then(() =>
            getJoinedClasses(user_id).then(() => {
              history.push(routes.HOME);
            })
          );
        });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event =>
            this.setState(byPropKey("password", event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.userReducer
  };
}
export default withRouter(
  connect(mapStateToProps, { getUser, getOwnerClasses, getJoinedClasses })(
    SignInPage
  )
);

export { SignInForm };
