import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Flashcards from "../../../Flashcards/Flashcards";
import { Tabs, Tab } from "material-ui/Tabs";
import "./TeacherView.css";
import { getQuiz } from "../../../../ducks/quizReducer";
import StudentAvg from "../../../Graphs/TeacherGraphs/TeacherAverageStudentBar";
import ClassAvg from "../../../Graphs/TeacherGraphs/TeacherAverageClassBar";
import AnswerAvg from "../../../Graphs/TeacherGraphs/TeacherAverageAnswerBar";

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

class TeacherView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "a"
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

  handleTab = value => {
    this.setState({
      value: value
    });
  };
  launchQuiz() {}

  render() {
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

    return (
      <div>
        <Tabs value={this.state.value} onChange={this.handleTab}>
          <Tab label="Resources" value="a">
            <div>
              <Flashcards />
            </div>
          </Tab>
          <Tab label="Quizzes" value="b">
            <div>
              <h2 style={styles.headline}>Quizzes</h2>
              <Link to={`/createquiz/${this.props.match.params.id}`}>
                CREATE QUIZ
              </Link>
              {classQuiz}
            </div>
          </Tab>
          <Tab label="Graphs" value="c">
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
          </Tab>
        </Tabs>
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
export default withRouter(connect(mapStateToProps, { getQuiz })(TeacherView));
