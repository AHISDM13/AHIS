import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
class Nav extends Component {
  state = { open: false };
  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });
  render() {
    const styles = {
      nav: {
        background: "#546E7A"
      }
    };

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

export default Nav;
