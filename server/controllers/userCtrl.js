const addNewUser = (req, res) => {
  const { displayName, email } = req.body;
  const {session} = req;
  req.app
    .get("db")
    .add_new_user([displayName, email])
    .then(user => {
      session.user = user[0];
      res.status(200).send(user[0]);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
const getUserInfo=(req,res) =>{
  const {session} =req;
    res.status(200).send(session.user);
}
const getUser = (req, res) => {
  // console.log("hit the get /api/user");
  const { email } = req.params;
  const {session} = req;
  req.app
    .get("db")
    .get_user([email])
    .then(user => {
      session.user = user[0];
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
  const {session} = req;
  db
    .update_user([firstname, lastname, email, id])
    .then(user => {
      session.user = user[0];
      res.status(200).send(user[0]);
    })
    .catch(e => console.log(e));
};

module.exports = {
  addNewUser,
  getUser,
  updateUser,
  getUserInfo
};
