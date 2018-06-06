import React, { Component } from "react";
import { connect } from "react-redux";
import "./Profile.css";

import { updateUser } from "../../ducks/userReducer";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      pic: "",
      birth: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="profile-page">
        <div className="profiletitle">
          <h2>Update Your Account</h2>
          <div className="underline" />
        </div>
        <form
          className="profileform"
          onSubmit={() => {
            this.props.updateUser(
              this.state.first_name,
              this.state.last_name,
              this.state.email,
              this.props.user.id
            );
          }}
        >
          <div className="container">
            <div className="section">First Name</div>

            <div>
              <i className="far fa-user-circle" />

              <input
                className="form-input"
                placeholder="Update First Name"
                type="text"
                value={this.state.first_name}
                name="first_name"
                onChange={this.handleInput}
                autoFocus
                data-cy-update-first
              />
            </div>
          </div>
          <div className="container">
            <div className="section">Last Name</div>

            <div>
              <i className="far fa-user-circle" />

              <input
                className="form-input"
                placeholder="Update Last Name"
                type="text"
                value={this.state.last_name}
                name="last_name"
                onChange={this.handleInput}
                data-cy-update-last
              />
            </div>
          </div>
          {/* <p>Picture</p>
          <div className="container">
            <input
              className="form-input"
              type="text"
              value={this.state.pic}
              name="pic"
              onChange={this.handleInput}
            />
          </div> */}
          <div className="container">
            <div className="section">Update Email</div>
            <div>
              <i className="fas fa-at" />

              <input
                className="form-input"
                placeholder="Update E-Mail"
                type="text"
                value={this.state.email}
                name="email"
                onChange={this.handleInput}
                data-cy-update-email
              />
            </div>
          </div>
          <input
            className="submit"
            type="submit"
            value="submit"
            data-cy-submit-profile
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.userReducer
  };
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Profile);
