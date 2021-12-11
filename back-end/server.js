const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions)); 

const { searchController } = require("./controllers/search.controller");

const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'proximity_network',
    password: 'fran1985',
    port: 5432
});

const secret = "proximity migracode";

//middlewares
const checkDuplicatedEmail = (req, res, next) => {
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

//FUNCTION
const registerController = (req, res) => {
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

const logInController = (req, res) => {
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

//AUTH ENDPOINTS
app.post("/register", checkDuplicatedEmail, registerController);
app.post("/login", logInController);


//PUBLIC ENDPOINTS

app.get('/', (req, res)=> { // display the home page 
    const nameApp = { App: "Proximity network"}        
    res.status(200).send(nameApp);
});


app.get('/search/:zone', searchController);

app.get('/stores', (req, res)=> {  // return list of all stores
pool.query('SELECT * FROM stores')
.then((result)=>res.json(result.rows))
.catch((e)=> console.log(e)) 
});

app.get('/stores/:city', (req, res)=>{ //return list of stores filtered by city
    const city = req.params.city;
    
    pool.query("SELECT name, store_description as Description, store_category as Category, web_page as Web, store_email as email, phone_number, image FROM stores as s join stores_locations as s_l on s_l.store_id = s.store_id WHERE upper(city) = upper($1)", [city])
    
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
});

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

app.delete('/products/:productId', (req, res) => {
    const idProduct = req.params.productId;
    const queryDeleteProduct = 'DELETE FROM products USING stores WHERE products.store_id = stores.store_id and products.id = $1';
    pool.query(queryDeleteProduct, [idProduct])
        .then(() => res.status(200).send({message : `Product number ${idProduct} was deleted`}))
        .catch(e => console.log(e))
})

app.get('/products/:productId', (req,res)=> { //return data of the given product
    const productId = req.params.productId;

    pool.query('SELECT * FROM products WHERE id = $1', [productId])
    .then((result)=> res.json(result))
    .catch((e)=> console.log(e));
});

app.get('/products/storeProducts/:storeId', (req,res)=> { //return data of the given product
    const storeId = req.params.storeId;

    pool.query('SELECT * FROM products WHERE store_id = $1', [storeId])
    .then((result)=> res.json(result.rows))
    .catch((e)=> console.log(e));
});
app.post('/stores/profile/:idStore/addproducts', (req, res) => { // the store add a product 
    const idStore= req.params.idStore;
    const { type, brand, category, description, unit, price, producer, origin } = req.body;
    const query = 'INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)';

    pool.query(query, [idStore, type, brand, category, description, unit, price, producer, origin])
    .then(() => res.status(200).send({message : `Product ${brand} was added succesfully`}))
    .catch(error => console.log(error))
    //res.send(console.log(req.body))

})
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
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`proximity network is running in port ${PORT}`));