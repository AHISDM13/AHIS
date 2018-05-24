import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import { getClassroom } from "../../ducks/classRoomReducer";
import { getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import { firebase } from "../../firebase";

class Nav extends Component {
  state = { open: false };
  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  componenDidMount() {
    //    this.props.getClassroom(this.props.match.params.id);
    const { getUser, user } = this.props;
    firebase.auth.onAuthStateChanged(authUser => {
      authUser ? getUser(authUser.providerData[0]) : null;
    });
    console.log(user);
  }
  render() {
    const styles = {
      nav: {
        background: "#546E7A"
      }
    };

    // const { classRoom } = this.props;/.
    // const classlist = classRoom.map((e, i) => {
    //   return <MyClassRoom key={i} className={e.className} />;
    // });

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
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    classRoom: state.classRoomReducer.classroom,
    user: state.userReducer.user
  };
}

export default connect(mapStateToProps, { getClassroom, getUser })(Nav);
