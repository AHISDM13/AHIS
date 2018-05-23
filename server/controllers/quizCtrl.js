const axios = require("axios");

module.exports = {
  createQuiz: (req, res, next) => {
    var { classid, quizName } = req.body;
    const dbInstance = req.app.get("db");
    dbInstance
      .create_quiz([classid, quizName])
      .then(res => {
        res.status(200).send(response);
      })
      .catch(() => res.status(500).send());
  },

  getQuiz: (req, res, next) => {
    const { classid } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_class_quizzes([classid])
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  },

  addQuestion: (req, res, next) => {
    const {
      quizid,
      question,
      answer,
      dummydata_a,
      dummydata_b,
      dummydata_c
    } = req.body;
    const dbInstance = req.app.get("db");
    dbInstance
      .add_question([
        quizid,
        question,
        answer,
        dummydata_a,
        dummydata_b,
        dummydata_c
      ])
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  },

  getQuestions: (req, res, next) => {
    const { quizid } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_questions([quizid])
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  }
};
