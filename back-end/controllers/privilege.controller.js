const { pool } = require("../pool");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//middleware

//functions
exports.deleteProduct = (req, res) => {
    const idProduct = req.params.productId;
    const queryDeleteProduct =
      "DELETE FROM products USING stores WHERE products.store_id = stores.store_id and products.id = $1";
    pool
      .query(queryDeleteProduct, [idProduct])
      .then(() =>
        res
          .status(200)
          .send({ message: `Product number ${idProduct} was deleted` })
      )
      .catch((e) => console.log(e));
  }
