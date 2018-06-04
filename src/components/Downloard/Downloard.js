import React, { Component } from "react";
import axios from "axios";
import * as firebase from "firebase";

class Download extends Component {
  state = {
    img: ""
  };
  downloadHandler() {
    var storage = firebase.storage();
    var storageRef = firebase.storage().ref();
    var starsRef = storageRef.child("images/_DSC1567.jpg");
    starsRef
      .getDownloadURL()
      .then(function(url) {
        console.log(url);
        this.stateState({ img: url });
        console.log(this.state);
        return <img src={url} />;
      })
      .catch(function(error) {
        switch (error.code) {
          case "storage/object_not_found":
            break;
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={this.downloadHandler}>Download</button>
        <img alt="image" src={this.state.img} />
      </div>
    );
  }
}

export default Download;
