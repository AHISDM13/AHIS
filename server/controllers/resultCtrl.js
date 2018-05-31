const addResult = (req, res) => {
  console.log("hit the post /api/result");
  const { question_id, user_answer, user_id, quiz_id, correct } = req.body;
  req.app
    .get("db")
    .add_result([question_id, user_answer, user_id, quiz_id, correct])
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
const getResult = (req, res) => {
  console.log("hit the get /api/result/:quiz_id");
  const { quiz_id } = req.params;
  req.app
    .get("db")
    .get_result_by_quizID([quiz_id])
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const getStudentResultForAllQuizzes = (req, res) => {
  const { user_id, classroom_id } = req.params;
  // const { classroom_id } = req.body;
  // console.log(req.body);
  console.log("hit /api/studentresult/:user_id", user_id, classroom_id);
  req.app
    .get("db")
    .get_a_student_avg([user_id, classroom_id])
    .then(results => {
      res.status(200).send(results);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  addResult,
  getResult,
  getStudentResultForAllQuizzes
};
