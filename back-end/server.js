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

app.get('/', (req, res)=> {
    const nameApp = { App: "Proximity network"}
    // it displays the home page 
    
    res.status(200).send(nameApp);
});

app.get('/stores', (req, res)=> {
// displays the list of stores
pool.query('SELECT * FROM stores', (error, result) => {
    res.json(result.rows);
});
})
app.get('/products', (req, res)=> {
    // displays list of products 
    pool.query('SELECT * FROM products', (error, result) => {
        console.log(result);
        res.json(result.rows[0].name +" "+'€'+ result.rows[0].price + " "+result.rows[0].quantity_weight.slice(2,4)+ " "+'kg');
    });
})
app.post('/store/product', (req, res)=> {
// here a given store adds a product that it sells 
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`proximity network is running in port ${PORT}`))

