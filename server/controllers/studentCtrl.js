const addStudentToClasses = (req, res) => {
  console.log("hit the post /api/student/classroom_id/user_id");
  const { classroom_id, user_id } = req.params;
  req.app
    .get("db")
    .add_student_to_class([classroom_id, user_id])
    .then(student => {
      res.status(200).send(student);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
const getClassroom = (req, res) => {
  console.log("hit the get /api/classroom/:classroom_id");
  const { classroom_id } = req.params;
  /////!!!!!we have to join multiple tables to get all the datas stored in classroom
  req.app
    .get("db")
    .get_classroom([classroom_id])
    .then(classroom => {
      res.status(200).send(classroom);
      console.log(classroom);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
module.exports = {
  addStudentToClasses,
  getClassroom
};
