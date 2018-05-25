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
        <h2>Update your account details</h2>
        <form
          onSubmit={() => {
            this.props.updateUser(
              this.state.first_name,
              this.state.last_name,
              this.state.email,
              this.props.user.id
            );
          }}
        >
          <p>First Name</p>
          <div className="container">
            <i className="far fa-user-circle" />
            <input
              className="form-input"
              type="text"
              value={this.state.first_name}
              name="first_name"
              onChange={this.handleInput}
            />
          </div>
          <p>Last Name</p>
          <div className="container">
            <i className="far fa-user-circle" />
            <input
              className="form-input"
              type="text"
              value={this.state.last_name}
              name="last_name"
              onChange={this.handleInput}
            />
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
          <p>Update Email</p>
          <div className="container">
            <i className="fas fa-at" />
            <input
              className="form-input"
              type="text"
              value={this.state.email}
              name="email"
              onChange={this.handleInput}
            />
          </div>
          <input className="submit" type="submit" value="submit" />
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

export default connect(mapStateToProps, { updateUser })(Profile);
