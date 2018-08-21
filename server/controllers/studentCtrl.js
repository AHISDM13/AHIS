const addStudentToClasses = (req, res) => {
  // console.log("hit the post /api/student/classroom_id/user_id");
  const { classroom_id } = req.params;
  const {session} =req;
  req.app
    .get("db")
    .add_student_to_class([classroom_id, session.user.id])
    .then(student => {
      res.status(200).send(student);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
const getClassroom = (req, res) => {
  // console.log("hit the get /api/classroom/:classroom_id");
  const { classroom_id } = req.params;
  req.app
    .get("db")
    .get_classroom([classroom_id])
    .then(classroom => {
      req.session.user.currentClassroom = classroom[0]
      res.status(200).send(classroom[0]);
    })
    .catch(err => {
      res.status(500).send(err);
    });
    
};
const getClassroomInfo = (req,res)=>{
  res.status(200).send(req.session.user.classroom);
}
const getQuizsByClassroomID = (req, res) => {
  // console.log("hit the get /api/quizs/:classroom_id");
  const { classroom_id } = req.params;
  req.app
    .get("db")
    .get_quizs_by_classroomID([classroom_id])
    ////it will only get the quiz from classroom 47 for just now
    .then(quizs => {
      res.status(200).send(quizs);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
module.exports = {
  addStudentToClasses,
  getClassroom,
  getQuizsByClassroomID,
  getClassroomInfo
};
