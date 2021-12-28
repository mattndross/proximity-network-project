const { pool } = require("../pool");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = "proximity migracode";

//middlewares
exports.checkDuplicatedEmail = (req, res, next) => {
  const email = req.body.managerEmail;

  pool
    .query(
      "SELECT  manager_email FROM stores_authentications WHERE manager_email = $1",
      [email]
    )
    .then((result) => {
      if (result.rowCount !== 0) {
        console.log("dntro de if hay uno ya registrado")
         res.status(400).json({ messege: "Error! ya existe una cuenta vinculada a este email!",});
         return
      } else {
      next();}
    })
    .catch((error) => console.log(error));
};

exports.veryfyJwt = (req, res, next) => {
  const auth = req.header("Authorization");
  const token = auth.split(" ")[1]; //separa "bearer" de  "token" y se queda con el segundo elemento
  try {
    const decodedToken = jwt.verify(token, secret);
    req.user = decodedToken; //asigna al obj req la propiedad user que tiene la info del token
    next();
  } catch (err) {
    response.status(401).json({ message: "You shall not pass!!" });
  }
};

//Controllers
exports.register = (req, res) => {
  const newUser = req.body;
  console.log("newUser", req.body)
  const salt = bcrypt.genSaltSync(6)
  const encriptedPass = bcrypt.hashSync(newUser.password, salt);
  pool
    .query(
      "INSERT INTO stores_authentications ( store_manager, manager_email, password) VALUES ( $1, $2, $3)",
      [newUser.storeManager, newUser.managerEmail, encriptedPass]
    )
    .then(() => {
      pool
        .query(
          "SELECT id, store_manager FROM stores_authentications WHERE manager_email = $1", [newUser.managerEmail])
        .then((result)=>{
          console.log("result.rows[0]", result.rows[0])
          let token = jwt.sign({ id: result.rows[0].id }, secret, {
            expiresIn: 86400,
            
          });
          console.log("token", token)
          const data = { id: result.rows[0].id, name: result.rows[0].store_manager, token: token, isAuthenticated: true, message: "store user created!" };
          res.status(200).json(data)
          
              
        })
            .catch((error) => {
              console.log(error);
            });
    })
 
};

exports.logIn = (req, res) => {
  const user = req.body;
  pool
    .query("SELECT id FROM stores_authentications where manager_email = $1", [
      user.email,
    ])
    .then((result) => {
      if (result.rowCount === 0) {
        console.log("result.rows", result.rowCount);
        return res.status(400).json({ messege: "email not found" });
      }
      const data = result.rows[0];
      const passwordIsValid = bcrypt.compare(user.password, data.password);
      if (!passwordIsValid) {
        console.log("data = result.rows[0]", data)
        return res.status(404).json({ message: `not valid email or password.` });
      }

      let token = jwt.sign({ id: result.rows[0].id }, secret, {
        expiresIn: 86400,
      });
      return res
        .status(200)
        .json({ id: result.rows[0].id, token: token, isAuthenticated: true });

    });
};
