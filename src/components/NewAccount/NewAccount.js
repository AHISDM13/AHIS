import React, { Component } from "react";
import { connect } from "react-redux";
import "./Profile.css";

class NewAccount extends Component {
  constructor() {
    super();

    this.state = {
      pic: "",
      birth: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //   question(e) {
  //     return (
  //       <div className="question">
  //         <p>
  //           Nito is for all ages, but we do require all users to provide their
  //           date of birth
  //         </p>
  //       </div>
  //     );
  //   }
  handleSubmit() {}
  render() {
    return (
      <div className="newaccount-page">
        <div>
          <h2>Complete your account</h2>
        </div>
        <form onSubmit={() => this.handleSubmit()}>
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
          <i className="far fa-question-circle fa-3x" />

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

export default NewAccount;
