import React from "react";
import "./SearchResult.css";
import SkyLight from "react-skylight";
import { connect } from "react-redux";
import swal from "sweetalert";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { getClassroom } from "../../ducks/classRoomReducer";
class SearchResult extends React.Component {
  state = { password: "" };
  handleInput(val) {
    this.setState(() => ({ password: val }));
  }
  join(classroom_id) {
    const { user, getClassroom, history } = this.props;
    user
      ? axios
          .post(`/api/student/${classroom_id}`)
          .then(() =>
            getClassroom(classroom_id).then(() =>
              swal({
                title: "successfully joined the class",
                icon: "success",
                button: "explore the class"
              })
            )
          )
          .then(history.push(`/classroom/${classroom_id}`))
          .catch(err => console.log(err))
      : swal({
          title: "login required",
          icon: "error",
          button: "login"
        }).then(history.push("/signin"));
  }
  render() {
    const { searchResults } = this.props;
    const { password } = this.state;
    const displaySearchResults = searchResults.map((el, i) => {
      return (
        <div className="SearchR_listItem" key={i}>
          <h1 className="Search_listItem-h1">{el.title}</h1>
          <h3 className="Search_listItem-h3">#{el.subject}</h3>
          <button
            onClick={() =>
              el.public ? this.join(el.classroom_id) : this.simpleDialog.show()
            }
          >
            Join
          </button>

          <SkyLight
            hideOnOverlayClicked
            ref={ref => (this.simpleDialog = ref)}
            title="this is a private class"
          >
            <input
              onChange={e => this.handleInput(e.target.value)}
              placeholder="type a password to join this class"
            />
            <button
              onClick={() =>
                el.password === password
                  ? this.join(el.classroom_id)
                  : swal({
                      title: "incorrect password",
                      icon: "erro"
                    })
              }
            >
              Confirm
            </button>
          </SkyLight>
        </div>
      );
    });

    return <div className="SearchR">{displaySearchResults}</div>;
  }
}
const mapStateToProps = state => {
  return {
    ...state.searchReducer,
    user: state.userReducer.user
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { getClassroom }
  )(SearchResult)
);
