import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Flashcards from "../../../Flashcards/Flashcards";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import SwipeableViews from "react-swipeable-views";
// import Typography from "@material-ui/core/Typography";
import "./TeacherView.css";
import { getQuiz } from "../../../../ducks/quizReducer";
import StudentAvg from "../../../Graphs/TeacherGraphs/TeacherAverageStudentBar";
import ClassAvg from "../../../Graphs/TeacherGraphs/TeacherAverageClassBar";
import AnswerAvg from "../../../Graphs/TeacherGraphs/TeacherAverageAnswerBar";

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
  componentDidMount() {
    this.props.getQuiz(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getQuiz(this.props.match.params.id);
    }
  }

  handleTab = (event, value) => {
    this.setState({ value: +value });
  };

  render() {
    const { classes } = this.props;
    // const { value } = this.state;

    if (this.props.loading) {
      return <div>is loading...</div>;
    }
    let classQuiz = this.props.quiz.map((list, i) => {
      return (
        <Link key={i} to={`/editquiz/${list.quiz_id}`}>
          {list.quiz_name}
        </Link>
      );
    });

    console.log(this.props);
    // let classResource = this.props.resources.map((e, i) => {
    //   return (
    //     <div>
    //     key={i}
    //     title={e.title}
    //     date={e.date} </div>
    //   )
    // })
    console.log(typeof this.state.value);
    return (
      <div>
        <Tabs value={this.state.value} onChange={this.handleTab} centered>
          <Tab label="Resources" value="0" />
          <Tab label="Quizzes" value="1" />
          <Tab label="Graphs" value="2" />
        </Tabs>

        {this.state.value === 0 && (
          <div>
            <Flashcards />
          </div>
        )}
        {this.state.value === 1 && (
          <div>
            <h2 style={styles.headline}>Quizzes</h2>
            <Link to={`/createquiz/${this.props.match.params.id}`}>
              CREATE QUIZ
            </Link>
            {classQuiz}
          </div>
        )}
        {this.state.value === 2 && (
          <div>
            <h2 style={styles.headline}>Analytics</h2>
            <div className="teachergraphs">
              <div className="graphs">
                <StudentAvg />
              </div>
              <div className="graphs">
                <ClassAvg />
              </div>
              <div className="graphs">
                <AnswerAvg />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    classRooms: state.classRoomReducer.classRooms,
    quiz: state.quizReducer.quiz
  };
}

TeacherView.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps, { getQuiz })(TeacherView))
);
