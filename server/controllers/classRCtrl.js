// const createClassRoom = (req, res) => {
//   console.log("hit the post /api/classroom");
// };
// module.exports = {
//   createClassRoom
const axios = require("axios");
var id = 2;

module.exports = {
  submitClassRoom: (req, res, next) => {
    var { className, password, subject } = req.body;
    const dbInstance = req.app.get("db");
    dbInstance
      .create_class([id, className, subject, true, password])
      .then(response => {
        id++;
        res.status(200).send(response);
      })
      .catch(() => res.status(500).send());
  },

  getClassRoom: (req, res, next) => {
    const { ownerid } = req.params;
    const dbInstance = req.app.get("db");
    dbInstance
      .get_student_classes([ownerid])
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  }
};
