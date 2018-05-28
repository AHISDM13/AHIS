import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import { connect } from "react-redux";

class Nav extends Component {
  state = { open: false, user: {}, classrooms: [] };
  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  componenDidMount() {}
  render() {
    console.log(this.props.classRooms);
    const styles = {
      nav: {
        background: "#546E7A"
      }
    };
    const { classRooms } = this.props;
    const createdClasses = classRooms
      ? classRooms.map((e, i) => {
          return (
            <Link key={i} to={`/classroom/${e.classroom_id}`}>
              {e.title}
            </Link>
          );
        })
      : null;
    console.log(this.props);

    return (
      <div className="Nav">
        <span className="hamburger">
          <a onClick={this.handleToggle}>&#9776;</a>
        </span>
        <Drawer
          width={300}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
          containerStyle={styles.nav}
          className="Nav_drawer"
        >
          <Link
            to="/home"
            className="Nav_link_1 Nav_link"
            onClick={this.handleClose}
          >
            Home
          </Link>
          <Link to="/profile" className="Nav_link" onClick={this.handleClose}>
            Profile
          </Link>
          <Link
            to="/createclass"
            className="Nav_link"
            onClick={this.handleClose}
          >
            Create Class
          </Link>
          <div>{createdClasses}</div>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    classRooms: state.classRoomReducer.classRooms,
    user: state.userReducer.user
  };
}

export default connect(mapStateToProps)(Nav);
