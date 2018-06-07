import React, { Component } from "react";
import axios from "axios";
import * as firebase from "firebase";
import { connect } from "react-redux";
import { addNewFile } from "../ducks/searchReducer";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Upload.css";
class Upload extends Component {
  state = {
    selectedFile: null,
    filesToDB: [],
    open: false,
    open2: false
  };

  componentDidMount() {
    const { files, match } = this.props;
    let resources = [];
    files.forEach((el, i) => {
      var storageRef = firebase.storage().ref();
      var starsRef = storageRef.child(
        "resource" + match.params.id + "/" + el.filename
      );
      starsRef.getDownloadURL().then(url => {
        resources.push(url);
        var image = document.createElement("img");
        image.id = "willwon";
        image.src = url;
        image.style.width = "300px";
        var container = document.getElementById("Upload_file-container");
        container.appendChild(image);
      });
    });
    this.setState(() => ({ resources: resources }));
  }
  componentDidUpdate(prevProps, prevState) {}
  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
    var reader = new FileReader();
    reader.onload = function(e) {
      var image = document.getElementById("showFile");
      image.src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  handleSave() {
    const { addNewFile, match } = this.props;
    const { filesToDB } = this.state;
    filesToDB.forEach((el, i) => {
      addNewFile(match.params.id, el);
    });
    this.setState({ open: true });
  }
  uploadHandler = () => {
    this.setState({ open2: true });
    const { match } = this.props;
    var storageRef = firebase.storage().ref();
    var file = this.state.selectedFile;
    let copy = this.state.filesToDB.slice();
    copy.push(file.name);
    this.setState({ filesToDB: copy });
    var metadata = {
      contentType: "image/jpeg"
    };
    var uploadTask = storageRef
      .child(`resource${match.params.id}` + "/" + file.name)
      .put(file, metadata);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      function(error) {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false, open2: false });
  };
  render() {
    console.log(this.props, this.state);
    const { selectedFile } = this.state;
    return (
      <div className="Upload">
        <header>
          <h1>Resources</h1>
        </header>
        <input
          className="Upload_choosefile"
          type="file"
          onChange={this.fileChangedHandler}
        />
        {selectedFile === null ? null : (
          <div className="selectedfiles">
            <img width="600" id="showFile" alt="file" src={selectedFile} />
            <button
              style={{ display: "block", margin: "20px auto" }}
              onClick={this.uploadHandler}
            >
              Upload!
            </button>
          </div>
        )}
        <div id="Upload_file-container">
          {this.props.isLoading && <CircularProgress size={50} />}
        </div>
        <Button className="savehaydenB" onClick={() => this.handleSave()}>
          Save
        </Button>
        <Snackbar
          message="successfully uploaded and saved"
          open={this.state.open}
          onClose={this.handleClose}
          autoHideDuration={2000}
        />
        <Snackbar
          message="upload successed save to share with your student"
          open={this.state.open2}
          onClose={this.handleClose}
          autoHideDuration={2000}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    files: state.searchReducer.files,
    isLoading: state.searchReducer.isLoading
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    { addNewFile }
  )(Upload)
);
