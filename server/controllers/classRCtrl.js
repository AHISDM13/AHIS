const axios = require("axios");

module.exports = {
  submitClassRoom: (req, res, next) => {
    console.log("hit the endpoint post /api/classroom");
    const { className, password, subject, ownerid } = req.body;
    console.log(ownerid);
    req.app
      .get("db")
      .create_class([ownerid, className, subject, true, password, true])
      .then(classes => {
        res.status(200).send(classes);
      })
      .catch(err => res.status(500).send(err));
  },

  getOwnerClasses: (req, res, next) => {
    console.log("hit the endpoint get /api/classes/:user_id");
    const { owner_id } = req.params;
    req.app
      .get("db")
      .get_Owner_Classes([owner_id])
      .then(classes => {
        console.log(classes);
        res.status(200).send(classes);
      })
      .catch(err => res.status(500).send(err));
  },
  getClassesByKeywords: (req, res) => {
    console.log("hit the endpoint get api/classes/:keyword");
    const { keyword } = req.params;
    req.app
      .get("db")
      .get_classes_by_keyword([keyword])
      .then(results => {
        res.status(200).send(results);
      })
      .catch(err => res.status(500).send(err));
  }
};
