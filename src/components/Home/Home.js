import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";
class Home extends Component {
  render() {
    // const displayUser = this.props.user.map((el,i)=>{
    //     <div key={i}>
    //     <h1>username : </h1>
    //     </div>
    // })
    console.log(this.props.user);
    return (
      <div className="Home">
        {/* {this.props.user} */}
        <Nav />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
}
export default connect(mapStateToProps)(Home);
