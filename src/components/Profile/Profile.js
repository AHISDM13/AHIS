import React, { Component } from "react";
import { connect } from "react-redux";
import "./Profile.css";
import ClassView from "../Classroom/ClassView";

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
        <h2>Update your account details</h2>
        <form onSubmit={() => this.handleSubmit()}>
          <p>First Name</p>
          <div className="container">
            <i className="far fa-user-circle" />
            <input
              className="form-input"
              type="text"
              value={this.props.first_name || this.state.first_name}
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
        {/* putting ClassView here, so that I can see the changes */}
        <ClassView />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(Profile);
