// import React from "react";
// import "./Student.css";
// import Quiz from "./Quiz/Quiz";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import * as firebase from "firebase";
// import Flashcards from "../Flashcards/Flashcards";
// class Student extends React.Component {
//   componentDidMount() {
//     const { files, match } = this.props;
//     let resources = [];
//     files.forEach((el, i) => {
//       var storageRef = firebase.storage().ref();
//       var starsRef = storageRef.child(
//         "resource" + match.params.id + "/" + el.filename
//       );
//       starsRef.getDownloadURL().then(url => {
//         resources.push(url);
//         var image = document.createElement("img");
//         image.src = url;
//         image.style.width = "300px";
//         var container = document.getElementById("Student_File");
//         container.appendChild(image);
//       });
//     });
//     this.setState(() => ({ resources: resources }));
//   }
//   render() {
//     const { user, currentClassroom, quizs } = this.props;
//     console.log(this.props);
//     return (
//       <div className="Student">
//         <h1 className="Student-h1">Quizzes</h1>
//         <div className="Student_Quiz">
//           <Quiz user={user} currentClassroom={currentClassroom} quizs={quizs} />
//         </div>
//         <div className="Student_File-container">
//           <h1 className="Student-h1">Resources</h1>
//           <div id="Student_File">.</div>
//         </div>
//         <div className="Student_Flashcards">
//           <h1 className="Student-h1">Flash cards</h1>
//           <Flashcards />
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     files: state.searchReducer.files
//   };
// }
// export default withRouter(connect(mapStateToProps)(Student));

import React from "react";
import "./Student.css";
import Quiz from "./Quiz/Quiz";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as firebase from "firebase";
import Flashcards from "../Flashcards/Flashcards";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import StudentGraph from "../Graphs/StudentGraphs/StudentAverageBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  }
};

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleTab = (event, value) => {
    this.setState({ value: +value });
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
        image.src = url;
        image.style.width = "300px";
        var container = document.getElementById("Student_File");
        container.appendChild(image);
      });
    });
    this.setState(() => ({ resources: resources }));
  }
  render() {
    const { user, currentClassroom, quizs } = this.props;
    const { value } = this.state;
    console.log(this.props);
    return (
      <div className="Student">
        <Tabs value={this.state.value} onChange={this.handleTab} centered>
          <Tab label="Quizzes" value="0" />
          <Tab label="Resources" value="1" />

          <Tab label="Flashcards" value="2" />
          <Tab label="Graphs" value="3" />
        </Tabs>

        {value === 0 ? (
          <div>
            <h1 className="Student-h1">Quizzes</h1>
            <div className="Student_Quiz">
              <Quiz
                user={user}
                currentClassroom={currentClassroom}
                quizs={quizs}
              />
            </div>
          </div>
        ) : value === 1 ? (
          <div className="graphview">
            <div className="Student_File-container">
              <h1 className="Student-h1">Resources</h1>
              <div id="Student_File">.</div>
            </div>
          </div>
        ) : value === 2 ? (
          <div className="Student_Flashcards">
            <h1 className="Student-h1">Flash cards</h1>
            <Flashcards />
          </div>
        ) : (
          <div className="studentviewg">
            <StudentGraph />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    files: state.searchReducer.files
  };
}
export default withRouter(connect(mapStateToProps)(Student));

{
  /* <h1 className="Student-h1">Quizzes</h1>
        <div className="Student_Quiz">
          <Quiz user={user} currentClassroom={currentClassroom} quizs={quizs} />
        </div>
        <div className="Student_File-container">
          <h1 className="Student-h1">Resources</h1>
          <div id="Student_File">.</div>
        </div>
        <div className="Student_Flashcards">
          <h1 className="Student-h1">Flash cards</h1>
          <Flashcards />
        </div> */
}
