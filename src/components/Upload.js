import React, { Component } from "react";
import axios from "axios";
import * as firebase from "firebase";
class Upload extends Component {
  state = { selectedFile: null };

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  //fileAddTofileshandler(){}
  uploadHandler = () => {
    console.log(this.state.selectedFile);
    // Points to the root reference
    var storageRef = firebase.storage().ref();

    // Points to 'images'
    var imagesRef = storageRef.child("images");

    // Points to 'images/space.jpg'
    // Note that you can use variables to create child values
    var fileName = this.state.selectedFile.name;
    var spaceRef = imagesRef.child(fileName);

    // File path is 'images/space.jpg'
    var path = spaceRef.fullPath;

    // File name is 'space.jpg'
    var name = spaceRef.name;

    // Points to 'images'
    var imagesRef = spaceRef.parent;

    // File or Blob named mountains.jpg
    var file = this.state.selectedFile;
    // Create the file metadata
    var metadata = {
      contentType: "image/jpeg"
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef
      .child("images/" + file.name)
      .put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
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
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;

          case "storage/canceled":
            // User canceled the upload
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileChangedHandler} />
        <button onClick={this.uploadHandler}>Upload!</button>
      </div>
    );
  }
}

export default Upload;
