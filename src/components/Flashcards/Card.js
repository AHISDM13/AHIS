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
      <div className="each-card">
        <div style={{ display: this.state.a }} onClick={this.flipRight}>
          <p>
            - passed a resolution requiring a 2/3 vote in Congress for
            declaration of war in the future
          </p>
        </div>
        <div style={{ display: this.state.b }} onClick={this.flipLeft}>
          <p>Hartford Convention</p>
        </div>
      </div>
    );
  }
}

export default Card;
