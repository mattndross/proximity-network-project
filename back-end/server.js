const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

const { pool } = require("./pool");
const authController = require("./controllers/auth.controller");
const publicController = require("./controllers/public.controller");
const { deleteProduct } = require("./controllers/privilege.controller");

//FUNCTION

//AUTH ENDPOINTS
app.post(
  "/register",
  authController.checkDuplicatedEmail,
  authController.register
);
app.post("/login", authController.logIn);

//PUBLIC ENDPOINTS

app.get("/", (req, res) => {
  // display the home page
  const nameApp = { App: "Proximity network" };
  res.status(200).send(nameApp);
});

app.get("/search/:zone", publicController.search); //devuelve lista de tiendas fitradas por codigo postal o ciudad
app.get("/stores", publicController.findAllStores); //devuelve lista de todas las tiendas
app.get("/stores/search/:storeName", publicController.findStoreByName); //devuelve los datos publicos de las tienda que coinciden con la busqueda
app.get("/stores/profile/:storeId", publicController.findStoresById); //devuleve los datos de la tienda con ese id
app.get("/products/:productId", publicController.findProductById);//devuelve los datos del producto con ese id

app.delete("/products/:productId", deleteProduct);

app.get("/products/storeProducts/:storeId", (req, res) => {
  //return data of the given product
  const storeId = req.params.storeId;

  pool
    .query("SELECT * FROM products WHERE store_id = $1", [storeId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
});
app.post("/stores/profile/:idStore/addproducts", (req, res) => {
  // the store add a product
  const idStore = req.params.idStore;
  const { type, brand, category, description, unit, price, producer, origin } =
    req.body;
  const query =
    "INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

  pool
    .query(query, [
      idStore,
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
});
//PUT/products/:productId |-- la tienda edita los datos de un producto en particular
app.put("/products/:productId", (req, res) => {
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
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`proximity network is running in port ${PORT}`)
);

