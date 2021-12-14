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
app.get('/store-profile/:storeName', publicController.getProfile);//devuelve los datos de perfil de la tienda indicada

app.get("/products/storeProducts/:storeId", publicController.getAllStoreProducts);//devuelve todos los productos de una tienda
app.get("/stores", publicController.findAllStores); //devuelve lista de todas las tiendas
app.get("/stores/search/:storeName", publicController.findStoreByName); //devuelve los datos publicos de las tienda que coinciden con la busqueda
app.get("/stores/profile/:storeId", publicController.findStoresById); //devuleve los datos de la tienda con ese id
app.get("/products/:productId", publicController.findProductById);//devuelve los datos del producto con ese id


app.post("/stores/profile/:idStore/addproducts", privilegeController.addProduct);//la tienda puede subir un nuevo producto
app.put("/products/:productId", privilegeController.editProduct);//la tienda puede editar un determinado producto
app.delete("/products/:productId", privilegeController.deleteProduct);//la tienda puede eliminar un determinado producto


const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`proximity network is running in port ${PORT}`)
);

