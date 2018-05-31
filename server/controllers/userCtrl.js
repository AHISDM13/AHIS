const addNewUser = (req, res) => {
  // console.log("hit the post /api/user");
  const { displayName, email } = req.body;
  //console.log(req.body);
  req.app
    .get("db")
    .add_new_user([displayName, email])
    .then(user => {
      // console.log(user);
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
const getUser = (req, res) => {
  // console.log("hit the get /api/user");
  const { email } = req.params;
  req.app
    .get("db")
    .get_user([email])
    .then(user => {
      // console.log(user);
      res.status(200).send(user[0]);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const updateUser = (req, res) => {
  const db = req.app.get("db");
  const { firstname, lastname, email } = req.body;
  const { id } = req.params;
  db
    .update_user([firstname, lastname, email, id])
    .then(response => {
      console.log(response);
    })
    .catch(e => console.log(e));
};

module.exports = {
  addNewUser,
  getUser,
  updateUser
};
