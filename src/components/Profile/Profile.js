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
      pic: "",
      birth: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit() {}
  render() {
    return (
      <div className="profile-page">
        <form onSubmit={() => this.handleSubmit()}>
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
          <p>Email</p>
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
          <p>Picture</p>
          <div className="container">
            <input
              className="form-input"
              type="text"
              value={this.state.pic}
              name="pic"
              onChange={this.handleInput}
            />
          </div>
          <p>Date of Birth</p>
          <div className="container">
            <i className="fas fa-birthday-cake" />
            <input
              className="form-input"
              type="text"
              value={this.state.birth}
              name="birth"
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
    state
  };
}

export default Profile;
