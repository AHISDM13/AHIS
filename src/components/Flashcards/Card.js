import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "flex",
      b: "none",
      flipped: false
    };
    this.flipRight = this.flipRight.bind(this);
    this.flipLeft = this.flipLeft.bind(this);
  }

  flipRight() {
    this.props.firstClick();
    this.setState(() => ({
      b: "flex",
      a: "none",
      flipped: !this.state.flipped
    }));
  }
  flipLeft() {
    this.setState(() => ({
      b: "none",
      a: "flex",
      flipped: !this.state.flipped
    }));
  }

  render() {
    console.log(this.props);
    var flippedStyle = this.state.flipped
      ? "Card-Back-Flip"
      : "Card-Front-Flip";
    return (
      this.props.ind === this.props.cardInd && (
        <div className="Card">
          <div
            className={"Card-Front " + flippedStyle}
            style={{ display: this.state.a }}
            onClick={this.flipRight}
          >
            <p>{this.props.ques}</p>
            {this.props.showHelp ? <p className="flip">Click</p> : null}
          </div>
          <div
            className={"Card-Back " + flippedStyle}
            style={{ display: this.state.b }}
            onClick={this.flipLeft}
          >
            <p>{this.props.answer}</p>
          </div>
        </div>
      )
    );
  }
}

export default Card;
