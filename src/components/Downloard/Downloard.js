import React, { Component } from "react";
import axios from "axios";
import * as firebase from "firebase";
import DownloadLink from "react-download-link";

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
        this.setState({ url: url });
        var xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = function(event) {
          var blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
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

        {/* <a href={this.state.url} download>click to download</a> */}

        <DownloadLink
          filename={this.state.url}
          exportFile={() => "My cached data"}
          tagName="button"
        >
          Save to disk
        </DownloadLink>
        <img src={this.state.url} />
      </div>
    );
  }
}

export default DownloadMethod;
