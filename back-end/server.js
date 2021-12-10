const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions)); 

const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'proximity_network',
    password: 'fran1985',
    port: 5432
});

app.get('/', (req, res)=> { // display the home page 
    const nameApp = { App: "Proximity network"}        
    res.status(200).send(nameApp);
});

app.get('/stores', (req, res)=> {  // return list of all stores
pool.query('SELECT * FROM stores')
.then((result)=>res.json(result.rows))
.catch((e)=> console.log(e)) 
});

app.get('/stores/:city', (req, res)=>{ //return list of stores filtered by city
    const city = req.params.city;
    pool.query("SELECT name, store_description as Description, store_category as Category, web_page as Web, store_email as email, phone_number, image FROM stores as s join stores_locations as s_l on s_l.store_id = s.id WHERE upper(city) = upper($1)", [city])
    
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
});

app.get('/stores/search/:postCode',  (req,res) => { // return list of stores that have the given post code.
    const postCode = req.params.postCode;
    pool.query("SELECT name, store_description as Description, store_category as Category, web_page as Web, store_email as email, phone_number, image FROM stores as s join stores_locations as s_l on s_l.store_id = s.id WHERE postcode = $1", [postCode])
    .then((result) => { if(result.rowCount == 0){
                        res.send({message : "there are not stores in this area"})
                    } else { 
                        return res.json(result.rows)}
                    })
    .catch((error) => console.log(error));
})

app.get('/stores/search/:storeName', (req, res)=>{ //return list of stores if the given  filtered by name
    const storeName = `%${req.params.storeName}%`;
    pool.query("SELECT name, store_description as Description, store_category as Category, web_page as Web, store_email as email, phone_number, image FROM stores as s WHERE UPPER(name) LIKE UPPER($1) ORDER BY name", [storeName])
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
});

app.get('/stores/profile/:storeId', (req,res)=>{ //return data of given store
    const storeId = req.params.storeId; 
    pool.query('SELECT * FROM stores WHERE id = $1', [storeId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
});

app.get('/products/:productId', (req,res)=> { //return data of the given product
    const productId = req.params.productId;

    pool.query('SELECT * FROM products WHERE id = $1', [productId])
    .then((result)=> res.json(result.rows))
    .catch((e)=> console.log(e));
});

app.get('/products/storeProducts/:storeId', (req,res)=> { //return data of the given product
    const storeId = req.params.storeId;

    pool.query('SELECT * FROM products WHERE store_id = $1', [storeId])
    .then((result)=> res.json(result.rows))
    .catch((e)=> console.log(e));
});

app.post('/stores/profile/:idStore/addproducts/', (req, res) => { // the store add a product 
    const idStore= req.params.idStore;
    const { type, brand, category, description, unit, price, producer, origin } = req.body;
    const query = 'INSERT INTO products (store_id, product_type, brand, category, product_description, unit, price, producer, origin) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
    
    pool.query(query, [idStore, type, brand, category, description, unit, price, producer, origin,])
    .then(() => res.status(200).send({message : "the product was added succesfully"}))
    .catch(error => console.log(error))
    //res.send(console.log(req.body))

})
         

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`proximity network is running in port ${PORT}`));