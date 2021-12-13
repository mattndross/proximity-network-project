const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions)); 

const { searchController } = require("./controllers/search.controller");

const { Pool } = require('pg');
const { reset } = require("nodemon");
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'proximity_network',
    password: 'fran1985',
    port: 5432
});

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
app.get('/store-profile/:storeName', publicController.getProfile);//devuelve los datos de perfil de la tienda indicada

app.get("/stores", publicController.findAllStores); //devuelve lista de todas las tiendas
app.get("/stores/search/:storeName", publicController.findStoreByName); //devuelve los datos publicos de las tienda que coinciden con la busqueda
app.get("/stores/profile/:storeId", publicController.findStoresById); //devuleve los datos de la tienda con ese id
app.get("/products/:productId", publicController.findProductById);//devuelve los datos del producto con ese id


app.delete("/products/:productId", deleteProduct);

app.get('/stores/search/:storeName', (req, res)=>{ //return list of stores if the given  filtered by name
    const storeName = `%${req.params.storeName}%`;
    pool.query("SELECT name, store_description as Description, store_category as Category, web_page as Web, store_email as email, phone_number, image FROM stores as s WHERE UPPER(name) LIKE UPPER($1) ORDER BY name", [storeName])
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
});

app.get('/stores/postcode/:postCode',  (req,res) => { // return list of stores that have the given post code.
    const postCode = req.params.postCode;
    pool.query("SELECT name, store_description as Description, store_category as Category, web_page as Web, store_email as email, phone_number, image FROM stores as s join stores_locations as s_l on s_l.store_id = s.store_id WHERE postcode = $1", [postCode])
    .then((result) => { if(result.rowCount == 0){
                        console.log(result);
                        res.send({message : "there are not stores in this area"})
                        } else { 
                        return res.json(result.rows)}
                    })
    .catch((error) => console.log(error));
})
app.get('/stores/profile/:storeId', (req,res)=>{ //return data of given store
    const storeId = req.params.storeId; 
    pool.query('SELECT * FROM stores WHERE store_id = $1', [storeId])
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
app.put('/products/:productId', (req, res) =>{
    const idProduct = req.params.productId;
    const { type, brand, category, description, unit, price, producer, origin } = req.body;
    const query = 'UPDATE products SET product_type = $1, brand = $2, category = $3, product_description = $4, unit = $5, price = $6, producer = $7, origin = $8 WHERE id = $9'
   pool.query(query, [type, brand, category, description, unit, price, producer, origin, idProduct])
        .then((result) => {if (result.rowCount === 0) { 
                        return res.send({message: `id number ${idProduct} does not exist`})
                      } 
                        else  {
                        // console.log(result);
                       return res.send({message : "your change was submitted"})
                    }})
        .catch((e)=> console.log(e))

})
//PUT/stores/:storeId?section |-- la tienda puede editar una sección(columna) específica de su perfil.
// app.put('/stores/location/:storeId', (req, res)=>{ // aqui solo cambia de las tablas stores y stores_locations
//     const idStore = req.params.storeId;
//     const {address, city, postcode, country} = req.body;
//     const query = 'UPDATE stores_locations SET  address = $1, city = $2, postcode = $3, country = $4 where store_id = $5';
//    console.log(address);
//     pool.query(query, [address, city, postcode, country, idStore])
//         .then((result)=>{console.log(result.rows); res.send(result)})
    
// })
// app.put('/stores/profile/:storeId', (req, res)=>{ // aqui solo cambia de las tablas stores y stores_locations
//     const idStore = req.params.storeId;
//     const { name, storeEmail, description, category, webPage, phone, image } = req.body;
//     console.log("store_email", storeEmail);
//     const query = "UPDATE stores SET name = $1, store_email = $2, store_description = $3, store_category = $4, web_page = $5, phone_number = $6, image = $7 WHERE store_id = $8";
//     if (!storeEmail) {
//        console.log(`estos son los datos: ${name}, ${storeEmail}, ${description}, ${category}, ${webPage}, ${phone}`);
//      } 
//     pool.query(query, [name, storeEmail, description, category, webPage, phone, image, idStore])
//         .then((result)=> { res.send("donde esta el body", result);
//     })
//         .catch(error=> console.log(error))
    
// })

// const querySelect = 'select * from stores as s inner join stores_locations as s_l on s_l.store_id = s.store_id where s.store_id =$1'
// .then((result)=>{
//     if(result.rows[0].address === address || result.rows[0].city === city || result.rows[0].postcode === postcode || result.rows[0].country === country ){
//         return res.send({message : "you changed nothing"})
//     } })
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`proximity network is running in port ${PORT}`)
);

