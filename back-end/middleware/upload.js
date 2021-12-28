const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/images/");
  },
  filename: (req, file, cb) => {
    
    console.log(file.originalname);
    console.log("__basedir", __basedir + "/resources/images/")
    cb(null, file.originalname);
    
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("image");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
