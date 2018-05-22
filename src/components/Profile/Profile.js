import React, { Component } from "react";
import { connect } from "react-redux";
import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
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
      <div className="Profile">
        <p>First Name</p>
        <input
          type="text"
          value={this.state.first_name}
          name="first_name"
          onChange={this.handleInput}
        />
        <p>Last Name</p>
        <input
          type="text"
          value={this.state.last_name}
          name="last_name"
          onChange={this.handleInput}
        />
        <p>Email</p>
        <input
          type="text"
          value={this.state.email}
          name="email"
          onChange={this.handleInput}
        />
        <p>Phone</p>
        <input
          type="text"
          value={this.state.phone}
          name="phone"
          onChange={this.handleInput}
        />
        <p>Picture</p>
        <input
          type="text"
          value={this.state.pic}
          name="pic"
          onChange={this.handleInput}
        />
        <p>Date of Birth</p>
        <input
          type="text"
          value={this.state.pic}
          name="pic"
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default Profile;
