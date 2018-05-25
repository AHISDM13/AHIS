import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Flashcards from "../../../Flashcards/Flashcards";
import { Tabs, Tab } from "material-ui/Tabs";

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
    //getQuizzes
  }

  handleTab = value => {
    this.setState({
      value: value
    });
  };
  launchQuiz() {}

  render() {
    // let classQuiz = this.props.quizzes.map((quiz, i) => {
    //   return <div> key={i} <p>{quiz.quiz_name}</p> <p>{e.count}</p> </div>;
    // });
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
            </div>
          </Tab>
          <Tab label="Graphs" value="c">
            <div>
              <h2 style={styles.headline}>Analytics</h2>
              <p>SOME GRAPHS</p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.classRoomReducer };
}
export default withRouter(connect(mapStateToProps)(TeacherView));
