import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as routes from "../constants/routes";
import { auth } from "../firebase";
import { addUser } from "../ducks/userReducer";
import "./SignUp.css";
const SignUpPage = ({ history, addUser }) => (
  <div>
    <SignUpForm history={history} addUser={addUser} />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    const { history, addUser } = this.props;
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // console.log(username, authUser.user.email);
        this.setState(() => ({ ...INITIAL_STATE }));
        ////if there's same thing in db don't add...
        addUser(username, authUser.user.email).then(() =>
          history.push(routes.HOME)
        );
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <div className="Sign_Up_Form">
        <form onSubmit={this.onSubmit} className="signin">
          <h1 className="signuph1">Sign Up</h1>
          <input
            className="input"
            value={username}
            onChange={event =>
              this.setState(byPropKey("username", event.target.value))
            }
            type="text"
            placeholder="Full Name"
          />
          <input
            className="input"
            value={email}
            onChange={event =>
              this.setState(byPropKey("email", event.target.value))
            }
            type="text"
            placeholder="Email Address"
          />
          <input
            className="input"
            value={passwordOne}
            onChange={event =>
              this.setState(byPropKey("passwordOne", event.target.value))
            }
            type="password"
            placeholder="Password"
          />
          <input
            className="input"
            value={passwordTwo}
            onChange={event =>
              this.setState(byPropKey("passwordTwo", event.target.value))
            }
            type="password"
            placeholder="Confirm Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export const SignUpLink = () => (
  <div className="SignUp_link">
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </div>
);
function mapStateToProps(state) {
  return {
    ...state.userReducer
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    { addUser }
  )(SignUpPage)
);
