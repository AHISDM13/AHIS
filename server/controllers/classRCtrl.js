const axios = require("axios");

module.exports = {
  submitFamily: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .create_class()
      .then(response => res.status(200).send(response))
      .catch(() => res.status(500).send());
  }
};
