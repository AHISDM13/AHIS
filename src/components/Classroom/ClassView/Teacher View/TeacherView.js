import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Flashcards from "../../../Flashcards/Flashcards";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
// import SwipeableViews from "react-swipeable-views";
// import Typography from "@material-ui/core/Typography";
import "./TeacherView.css";
// import StudentAvg from "../../../Graphs/TeacherGraphs/TeacherAverageStudentBar";
import ClassAvg from "../../../Graphs/TeacherGraphs/TeacherAverageClassBarGraphSize";
// import AnswerAvg from "../../../Graphs/TeacherGraphs/TeacherAverageAnswerBar";
import StudentQuizResults from "../../../Graphs/TeacherGraphs/StudentQuizResults";
import Resource from "../../../Resource/Resource";
const styles = {
  root: {
    flexGrow: 1
  }
};

class TeacherView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.match.params.id !== this.props.match.params.id) {
  //     this.props.getQuizsList(this.props.match.params.id);
  //   }
  // }

  handleTab = (event, value) => {
    this.setState({ value: +value });
  };

  render() {
    const { classes } = this.props;
    // const { value } = this.state;

    if (this.props.loading) {
      return <div>is loading...</div>;
    }
    let classQuiz = this.props.quizs.map((list, i) => {
      return (
        <Link key={i} to={`/editquiz/${list.quiz_id}`}>
          <div className="eachquiz">{list.quiz_name}</div>
        </Link>
      );
    });

    console.log(this.props);

    const { quizs } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Tabs value={this.state.value} onChange={this.handleTab} centered>
          <Tab label="Flash Cards" value="0" />
          <Tab label="Quizzes" value="1" />

          <Tab label="Graphs" value="2" />
          <Tab label="Resources" value="3" />
        </Tabs>

        {value === 1 ? (
          <div>
            <h2 style={styles.headline}>Quizzes</h2>
            <Button
              variant="raised"
              className={classes.button}
              onClick={() =>
                this.props.history.push(
                  `/createquiz/${this.props.match.params.id}`
                )
              }
            >
              Create New
            </Button>
            <div className="quizlist">{classQuiz}</div>
          </div>
        ) : value === 2 ? (
          <div className="graphview">
            <h2 style={styles.headline}>Analytics</h2>
            <div className="teacherview_classavg">
              <h5>
                Avg of all students who have completed the quiz in this class{" "}
              </h5>
              <ClassAvg />
            </div>
            <div>
              <h5>
                Select student in drop-down menu below to view quiz scores in
                the class
              </h5>
              <StudentQuizResults />
            </div>
          </div>
        ) : value === 3 ? (
          <Resource />
        ) : (
          <Flashcards quizs={quizs} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quiz: state.quizReducer.quiz,
    quizs: state.quizReducer.quizs
  };
}

TeacherView.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps)(TeacherView))
);
