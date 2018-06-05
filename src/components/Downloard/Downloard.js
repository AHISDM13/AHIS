import React, { Component } from "react";
import axios from "axios";
import * as firebase from "firebase";
const downloadFile = absoluteUrl => {
  var link = document.createElement("a");
  link.href = absoluteUrl;
  link.download = "true";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
};

class DownloadMethod extends Component {
  state = {
    url: ""
  };
  downloadHandler() {
    var storage = firebase.storage();
    var storageRef = firebase.storage().ref();
    var starsRef = storageRef.child("images/_DSC1567.jpg");
    starsRef
      .getDownloadURL()
      .then(url => {
        console.log(url);
        this.setState({ url: url });
        this.downloadFile(url);
        // var xhr = new XMLHttpRequest();
        // xhr.responseType = "blob";
        // xhr.onload = event => {
        //   var blob = xhr.response;
        // };
        // xhr.open("GET", url);
        // xhr.send();
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
        <button onClick={() => this.downloadHandler()}>Download</button>
        <img alt="image" src={this.state.img} />
      </div>
    );
  }
}

export default DownloadMethod;
