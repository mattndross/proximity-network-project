const { pool } = require("../pool");
const uploadFile = require("../middleware/upload");
const baseUrl = "http://localhost:4000/images/";

exports.uploadStoreImage = async (req, res) => {
  try {
    const storeId = req.user.id;
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    const imageUrl =  baseUrl + req.file.originalname;
    let dbMessege = "";

    await pool.query("UPDATE stores SET image = $1 WHERE store_id = $2 ", [imageUrl, storeId])
    .then(()=>{ dbMessege = "imageURL saved on the database!"})
    .catch((error)=> {
      console.log(error);
      dbMessege = error;})
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
      imageUrl,
      dbMessege,
    });
  } catch (err) {
    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};
