const addNewUser = (req, res) => {
  console.log("hit the post /api/user");
  const { displayName, email } = req.body;
  //console.log(req.body);
  req.app
    .get("db")
    .add_new_user([displayName, email])
    .then(user => {
      console.log(user);
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
const getUser = (req, res) => {
  console.log("hit the get /api/user");
  const { email } = req.params;
  req.app
    .get("db")
    .get_user(email)
    .then(user => {
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  addNewUser,
  getUser
};
