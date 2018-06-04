import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SignIn.css";
// import Button from "@material-ui/core/Button";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import { SignUpLink } from "./SignUp";
import { auth } from "../firebase";
import * as routes from "../constants/routes";
import { connect } from "react-redux";
import { getUser } from "../ducks/userReducer";
import { getOwnerClasses, getJoinedClasses } from "../ducks/classRoomReducer";
import { get } from "https";

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit
//   },
//   input: {
//     display: "none"
//   }
// });

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
    // const { classes } = props;
    return (
      <form className="Login_form" onSubmit={this.onSubmit}>
        <div>NIto</div>
        <input
          data-cy-inputbox-login
          value={email}
          data-cy-inputbox-login
          onChange={event =>
            this.setState(byPropKey("email", event.target.value))
          }
          data-cy-inputbox-login
          type="text"
          placeholder="Email Address"
          className="sign_in_input"
        />
        <input
          data-cy-inputbox-password
          value={password}
          data-cy-inputbox-password
          onChange={event =>
            this.setState(byPropKey("password", event.target.value))
          }
          data-cy-inputbox-password
          type="password"
          placeholder="Password"
          className="sign_in_input"
        />

        <button disabled={isInvalid} type="submit" data-cy-button-login>
          Sign In
        </button>

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
  connect(mapStateToProps, { getUser, getOwnerClasses, getJoinedClasses })(
    SignInPage
  )
);

export { SignInForm };
