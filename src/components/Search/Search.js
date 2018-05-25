import React, { Component } from "react";
import "./Search.css";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ""
    };
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleSearch(val) {
    this.setState({ inputVal: val });
  }
  handleEnter(e) {
    if (e.keyCode === 13) {
      console.log(
        "need an endpoint or method; also need to chain clearing input field"
      );
    }
  }
  render() {
    return (
      <div className="search-bar">
        <i className="fas fa-search" />
        <input
          type="text"
          onChange={e => {
            this.handleSearch(e.target.value);
          }}
          value={this.state.inputVal}
          onKeyDown={this.handleEnter}
          placeholder="Search by topic (i.e. 'Math', 'the American Revolution')"
        />
      </div>
    );
  }
}
export default Search;
