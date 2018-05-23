import React, { Component } from "react";
import Card from "./Card";

class Flashcards extends Component {
  constructor() {
    super();

    this.state = {
      deck: []
    };
  }
  flipCard() {}
  render() {
    return (
      <div>
        <h2>Card Row</h2>
        <div className="small-cards">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <Card />
        <div>
          <i className="fas fa-arrow-alt-circle-left fa-3x" />
          <i className="fas fa-arrow-alt-circle-right fa-3x" />
          <p>skip</p>
        </div>
      </div>
    );
  }
}
export default Flashcards;
