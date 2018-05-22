import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ""
    };
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(e) {
    if (event.keyCode === 13) {
    }
  }
  render() {
    return (
      <div>
        <input type="search" onKeyPress={this.handleEnter} />
      </div>
    );
  }
}
export default Search;
