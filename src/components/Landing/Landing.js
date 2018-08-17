import React from "react";
import SignInPage from "../SignIn";
import mainbg from "../../scss/images/main-bg.jpg";
import { connect } from "react-redux";
import "./Landing.css";
import AOS from "aos";
import "aos/dist/aos.css";
const styles = {
  signIn: {
    backgroundImage: `url(${mainbg})`,
    backgroundSize: "cover",
    padding: "15%"
  }
};
export const Public = () => {
  return (
    <div className="Public Landing_top" style={styles.signIn}>
      <SignInPage />
    </div>
  );
};
export const Private = () => {
  return (
    <div className="Private Landing_top" style={styles.signIn}>
      <div>Hayden's info</div>
    </div>
  );
};

class Landing extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1500
    });
  }
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div className="Landing">
        {user[0] ? <Private /> : <Public />}
        <div className="Landing_main">
          <div className="Landing_page-title">
            <span className="Landing_page-title-Q">Q.</span>
            <hr data-aos="fade-down" />
            <h1>
              <span data-aos="zoom-out">Quiz</span> Creator and
              <span data-aos="zoom-out">Learning Resources</span> Hub
            </h1>
          </div>
          <div className="Landing_page">
            <article>
              <span className="Landing_icons">
                <h2>Prepare</h2>
                <i className="fas fa-book-open" />
                <i className="far fa-file-image" />
              </span>
              <div data-aos="fade-up">
                Digital flashcards and teacher reources page to store lecture
                materials
                <hr/>
                <hr/>
              </div>
            </article>
            <article>
              <div>
              <hr data-aos="fade-down" />
                Create and participate in custom mulitple choice or
                fill-in-the-blank quizzes
                <hr data-aos="fade-up" />
              </div>
              <span className="Landing_icons">
                <h2>Test</h2>
                <i className="fas fa-check" />
                <i className="far fa-sticky-note" />
              </span>
            </article>
            <article>
              <span className="Landing_icons">
                <h2>Compare</h2>
                <i className="fas fa-comments" />
                <i className="fas fa-american-sign-language-interpreting" />
              </span>
              <div data-aos="fade-up">
              <hr/>
              <hr/>
                Review results and analytics from test you've created or taken
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.userReducer
  };
}
export default connect(mapStateToProps)(Landing);
