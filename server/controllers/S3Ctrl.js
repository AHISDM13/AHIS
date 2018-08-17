
  const downloadUrl = (req, res) => {
      const s3 = req.app.get('s3')
      console.log(req.params)
    const params = {
        Bucket: "nito-ahis", 
        Key: req.params.key
       };
       s3.getObject(params, function(err, data) {
        if (err) console.log(err, err.stack); 
        else     console.log(data);        
      });
      
  };
  

  module.exports = {
    downloadUrl
  };
  