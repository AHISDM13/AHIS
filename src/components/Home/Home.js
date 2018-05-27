import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
import { getStudentClasses } from "../../ducks/classRoomReducer";
class Home extends Component {
  componentDidMount() {
    this.props.getStudentClasses(this.props.user.id);
  }
  render() {
    console.log(this.props);
    let mappedClasses = this.props.classes.map((e, i) => {
      return (
        <div key={i}>
          <p>{e.title}</p>
          <p>{e.subject}</p>
        </div>
      );
    });
    return <div>{mappedClasses}</div>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    classRooms: state.classRoomReducer.classRooms,
    classes: state.classRoomReducer.classes
  };
}
export default connect(mapStateToProps, { getStudentClasses })(Home);
