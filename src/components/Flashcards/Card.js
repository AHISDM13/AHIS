import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "none"
    };
  }

  flipRight() {
    this.setState({ display: "inline-block" });
  }
  render() {
    return (
      <div className="each-card">
        <div className="a-side">
          <p>
            - passed a resolution requiring a 2/3 vote in Congress for
            declaration of war in the futuren
          </p>
        </div>
        <div style={{ display: this.state.display }} className="b-side">
          <p>Hartford Convention</p>
        </div>
      </div>
    );
  }
}

export default Card;
