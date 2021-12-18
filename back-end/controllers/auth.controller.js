const {pool} = require("../pool");
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
      console.log(result.rows);
      if (result.rows.length > 0) {
        return res.status(400).json({
          messege: "Error! ya existe una cuenta vinculada a este email!",
        });
      }
      next();
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
}


//Controllers
exports.register = (req, res) => {
    const newUser = req.body;
    newUser.password = bcrypt.hashSync(newUser.password, 6);
    pool
      .query(
        "INSERT INTO stores_authentications ( store_manager, manager_email, password) VALUES ( $1, $2, $3)",
        [newUser.storeManager, newUser.managerEmail, newUser.password]
      )
      .then(() => {
        res.status(200).json({ message: "store user created!" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  exports.logIn = (req, res) => {
    const user = req.body;
    pool
      .query("SELECT * FROM stores_authentications where manager_email = $1", [
        user.email,
      ])
      .then((result) => {
        if (result.rows.length < 1) {
          return res.status(400).json({ messege: "email not found" });
        }
        const data = result.rows[0];
        const passwordIsValid = bcrypt.compareSync(user.password, data.password);
        if (!passwordIsValid) {
          return res.status(404).send(`not valid email or password.`);
        } else {
  
          let token = jwt.sign({ id: result.rows[0].id }, secret, {
              expiresIn: 86400,
            });
            return res
              .status(200)
              .json({ id: result.rows[0].id, token: token, isAuthenticated: true });
        }
      });
  };

