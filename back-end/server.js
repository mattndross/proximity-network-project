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
const privilegeController = require("./controllers/privilege.controller");

const { nextTick } = require("process");



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
app.get("/stores/profiles/:storeId", publicController.getStoreById); //devuleve los datos de la tienda con ese id
app.get('/stores/:storeName', publicController.getProfile);//devuelve los datos de perfil de la tienda indicada

app.get("/products/storeProducts/:storeId", publicController.getAllStoreProducts);//devuelve todos los productos de una tienda
app.get("/stores", publicController.findAllStores); //devuelve lista de todas las tiendas
app.get("/stores/search/:storeName", publicController.findStoreByName); //devuelve los datos publicos de las tienda que coinciden con la busqueda
app.get("/products/:productId", publicController.findProductById);//devuelve los datos del producto con ese id

app.post("/stores/products", authController.veryfyJwt, privilegeController.addProduct);//la tienda puede subir un nuevo producto

app.put("/products/:productId", privilegeController.editProduct);//la tienda puede editar un determinado producto
app.delete("/products/:productId", privilegeController.deleteProduct);//la tienda puede eliminar un determinado producto

app.get('/stores/search/:storeName', (req, res) => { //return list of stores if the given  filtered by name
  const storeName = `%${req.params.storeName}%`;
  pool.query("SELECT name, store_description as Description, store_category as Category, web_page as Web, store_email as email, phone_number, image FROM stores as s WHERE UPPER(name) LIKE UPPER($1) ORDER BY name", [storeName])
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
});


//PUT/products/:productId |-- la tienda edita los datos de un producto en particular
app.put('/products/:productId', (req, res) => {
  const idProduct = req.params.productId;
  const { type, brand, category, description, unit, price, producer, origin } = req.body;
  const query = 'UPDATE products SET product_type = $1, brand = $2, category = $3, product_description = $4, unit = $5, price = $6, producer = $7, origin = $8 WHERE id = $9'
  pool.query(query, [type, brand, category, description, unit, price, producer, origin, idProduct])
    .then((result) => {
      if (result.rowCount === 0) {
        return res.send({ message: `id number ${idProduct} does not exist` })
      }
      else {
        // console.log(result);
        return res.send({ message: "your change was submitted" })
      }
    })
    .catch((e) => console.log(e))

})
//PUT/stores/:storeId?section |-- la tienda puede editar una sección(columna) específica de su perfil.
app.put('/stores/location/:storeId', (req, res) => { // aqui solo cambia de las tablas stores y stores_locations
  const idStore = req.params.storeId;
  const { address, city, postcode, country } = req.body;
  const query = 'UPDATE stores_locations SET  address = $1, city = $2, postcode = $3, country = $4 where store_id = $5';
  console.log(address);
  pool.query(query, [address, city, postcode, country, idStore])
    .then((result) => { console.log(result.rows); res.send(result) })

})




const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`proximity network is running in port ${PORT}`));

