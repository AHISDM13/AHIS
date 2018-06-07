const addNewResource = (req, res) => {
  console.log("hit the post /api/resource");
  const { file_name, classroom_id } = req.body;
  req.app
    .get("db")
    .add_new_resource([classroom_id, file_name])
    .then(files => {
      console.log(files);
      res.status(200).send(files);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
const getAllResources = (req, res) => {
  console.log("hit the get /api/resources/:classroom_id");
  const { classroom_id } = req.params;
  req.app
    .get("db")
    .get_all_resources([classroom_id])
    .then(files => {
      console.log(files);
      res.status(200).send(files);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  addNewResource,
  getAllResources
};
