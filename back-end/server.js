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
    pool.query('SELECT * FROM stores WHERE UPPER(city) = UPPER($1)', [city])
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
});

app.get('/stores/search/:storeName', (req, res)=>{ //return list of stores filtered by name
    const storeName = req.params.storeName;
    pool.query('SELECT * FROM stores WHERE UPPER(name) LIKE UPPER($1) ORDER BY name', [storeName])
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
});

app.get('/stores/profile/:storeId', (req,res)=>{ //return data of given store
    const storeId = req.params.storeId;
    pool.query('SELECT * FROM stores WHERE id = $1', [storeId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
});

app.get ('/products/:productId', (req,res)=> { //return data of the given product
    const productId = req.params.productId;

    pool.query('SELECT * FROM products WHERE id = $1', [productId])
    .then((result)=> res.json(result.rows))
    .catch((e)=> console.log(e));
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`proximity network is running in port ${PORT}`));