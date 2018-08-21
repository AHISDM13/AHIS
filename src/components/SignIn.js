import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SignIn.css";
import { SignUpLink } from "./SignUp";
import { auth } from "../firebase";
import * as routes from "../constants/routes";
import { connect } from "react-redux";
import { getUser } from "../ducks/userReducer";
import TextField from '@material-ui/core/TextField';
import { getOwnerClasses, getJoinedClasses } from "../ducks/classRoomReducer";

const SignInPage = ({
  history,
  getUser,
  getOwnerClasses,
  getJoinedClasses
}) => (
    <SignInForm
      history={history}
      getUser={getUser}
      getOwnerClasses={getOwnerClasses}
      getJoinedClasses={getJoinedClasses}
    />
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
    // const { classes } = props;
    return (
      <form className="Login_form" onSubmit={this.onSubmit}>
        <span className="Login_logo">NIT<span className="Login_logo-q">Q</span></span>
         <TextField
          placeholder="Email Address"
          type="text"
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
          value={email}
          data-cy-inputbox-login
          label="email address"
          margin="normal"
        />
          <TextField
          data-cy-inputbox-password
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          onChange={event =>
            this.setState(byPropKey("password", event.target.value))
          }
          value={password}
        />

        <button disabled={isInvalid} type="submit" data-cy-button-login>
          Sign In
        </button>
        <SignUpLink />

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

// SignInForm.propTypes = {
//   classes: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
  return {
    ...state.userReducer
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    { getUser, getOwnerClasses, getJoinedClasses }
  )(SignInPage)
);

export { SignInForm };
