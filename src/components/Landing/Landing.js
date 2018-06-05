import React from "react";
import SignInPage from "../SignIn";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="Landing_page">
      <div className="Landing">
        <SignInPage />
      </div>
      <h1 className="landing-page-title">
        Quiz Creator and Learning Resources Hub
      </h1>
      <div className="landing-page">
        <div className="landing_text_box">
          <h2 className="landing_title">Prepare</h2>
          <p>
            Digital flashcards and teacher reources page to store lecture
            materials
          </p>
        </div>
        <div className="landing_text_box">
          <h2 className="landing_title">Test</h2>
          <p>
            Create and participate in custom mulitple choice or
            fill-in-the-blank quizzes
          </p>
        </div>
        <div className="landing_text_box">
          <h2 className="landing_title">Compare</h2>
          <p>Review results and analytics from test you've created or taken</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
