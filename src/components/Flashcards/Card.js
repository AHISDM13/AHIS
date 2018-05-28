import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "flex",
      b: "none"
    };
    this.flipRight = this.flipRight.bind(this);
    this.flipLeft = this.flipLeft.bind(this);
  }

  flipRight() {
    this.setState(() => ({ b: "flex", a: "none" }));
  }
  flipLeft() {
    this.setState(() => ({ b: "none", a: "flex" }));
  }
  render() {
    return (
      this.props.ind === this.props.cardInd && (
        <div className="each-card">
          <div style={{ display: this.state.a }} onClick={this.flipRight}>
            <p>{this.props.ques}</p>
          </div>
          <div style={{ display: this.state.b }} onClick={this.flipLeft}>
            <p>{this.props.answer}</p>
          </div>
        </div>
      )
    );
  }
}

export default Card;
