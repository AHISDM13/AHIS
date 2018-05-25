const axios = require("axios");

module.exports = {
  createQuiz: (req, res, next) => {
    const { classroom_id, quiz_name } = req.body;
    const dbInstance = req.app.get("db");
    dbInstance
      .create_quiz([classroom_id, quiz_name])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
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
      quiz_id,
      question,
      answer,
      dummy_data_a,
      dummy_data_b,
      dummy_data_c
    } = req.body;
    const dbInstance = req.app.get("db");
    dbInstance
      .add_question([
        quiz_id,
        question,
        answer,
        dummy_data_a,
        dummy_data_b,
        dummy_data_c
      ])
      .then(response => {
        console.log(response);
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getQuestions: (req, res, next) => {
    // console.log(`HIT`);
    const { quiz_id } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_questions([quiz_id])
      .then(response => {
        // console.log(response);
        res.status(200).send(response);
      })
      .catch(err => {
        // console.log(err);
        res.status(500).send(err);
      });
  }
};
