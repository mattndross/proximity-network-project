const { pool } = require("../pool");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//middleware

//functions

exports.addProduct = (req, res) => {
  // the store add a product
  const storeId = req.user.id;
  const { type, brand, category, description, unit, price, producer, origin } =
    req.body;
  const query =
    "INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

  pool
    .query(query, [
      storeId,
      type,
      brand,
      category,
      description,
      unit,
      price,
      producer,
      origin,
    ])
    .then(() =>
      res
        .status(200)
        .send({ message: `Product ${brand} was added succesfully` })
    )
    .catch((error) => console.log(error));
  //res.send(console.log(req.body))
};

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
};

exports.editProduct = (req, res) => {
  const idProduct = req.params.productId;
  const { type, brand, category, description, unit, price, producer, origin } =
    req.body;
  const query =
    "UPDATE products SET product_type = $1, brand = $2, category = $3, product_description = $4, unit = $5, price = $6, producer = $7, origin = $8 WHERE id = $9";
  pool
    .query(query, [
      type,
      brand,
      category,
      description,
      unit,
      price,
      producer,
      origin,
      idProduct,
    ])
    .then((result) => {
      if (result.rowCount === 0) {
        return res.send({ message: `id number ${idProduct} does not exist` });
      } else {
        // console.log(result);
        return res.send({ message: "your change was submitted" });
      }
    })
    .catch((e) => console.log(e));
};
