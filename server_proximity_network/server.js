const express = require("express");
const app = express();

app.get('/', (req, res)=> {
    console.log(req);
    res.status(200).send("Proximity network app");
});

app.get('/stores', (req, res)=> {

})
app.get('/products', (req, res)=> {
    
})

app.listen(3000, ()=> console.log("proximity neetwork is running"))

