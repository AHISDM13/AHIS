import React, { Component } from "react";
import "./Search.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getClassesByKeyword } from "../../ducks/searchReducer";
class Search extends Component {
  state = {
    inputVal: ""
  };
  handleSearch(val) {
    this.setState(() => ({ inputVal: val }));
  }
  handleEnter(e) {
    const { history, getClassesByKeyword } = this.props;
    if (e.keyCode === 13) {
      getClassesByKeyword(this.state.inputVal).then(() => {
        history.push("/searchResult");
      });
    }
  }
  render() {
    return (
      <span className="search-bar">
        <i className="fas fa-search" />
        <input
          type="text"
          onChange={e => {
            this.handleSearch(e.target.value);
          }}
          value={this.state.inputVal}
          onKeyDown={e => this.handleEnter(e)}
          placeholder="Search by topic (i.e. 'Math', 'the American Revolution')"
        />
      </span>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.searchReducer
  };
}
export default withRouter(
  connect(mapStateToProps, { getClassesByKeyword })(Search)
);
