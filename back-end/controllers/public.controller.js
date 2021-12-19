const { pool } = require("../pool");

//QUERIES
const searchByPostalCodeQuery =
  "SELECT * FROM stores as s join stores_locations as s_l on s_l.store_id = s.store_id WHERE postcode = $1";
const searchByCityQuery =
  "SELECT * FROM stores as s join stores_locations as s_l on s_l.store_id = s.store_id WHERE upper(city) = upper($1)";

exports.search = (req, res) => {
  const zone = req.params.zone;
  if (parseInt(zone)) {
    console.log(parseInt(zone)); //si el primer numero es 0 lo recorta
    pool
      .query(searchByPostalCodeQuery, [zone])
      .then((result) => {
        if (result.rowCount === 0) {
          res.send({ message: "there are not stores in this area" });
        } else {
          return res.json(result.rows);
        }
      })
      .catch((error) => console.log(error));
  } else {
    pool
      .query(searchByCityQuery, [zone])
      .then((result) => {
        if (result.rowCount === 0) {
          return res.send({ message: "we didn't find any store in this area" });
        } else {
          return res.status(200).json(result.rows);
        }
      })
      .catch((e) => console.log(e));
  }
};

exports.findAllStores = (req, res) => {
  pool
    .query("SELECT * FROM stores")
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
};

exports.findStoreByName = (req, res)=>{ 
  const storeName = `%${req.params.storeName}%`;
  pool.query("SELECT * FROM stores WHERE UPPER(name) LIKE UPPER($1) ORDER BY name", [storeName])
  .then((result) => res.json(result.rows))
  .catch((e) => console.log(e));
}

exports.getStoreById =  (req,res)=>{ 
  const storeId = req.params.storeId; 
  pool.query('SELECT * FROM stores as s join stores_locations as s_l on s_l.store_id = s.store_id  WHERE s.store_id = $1', [storeId])
  .then((result) => res.json(result.rows))
  .catch((e) => console.log(e));
}

exports.getProfile = (req, res)=>{ //devuelve datos de la tienda idicada
  let storeName = req.params.storeName;
  storeName = storeName.trim().split("-").join(" ");

  pool.query("SELECT * FROM stores as s join stores_locations as s_l on s_l.store_id = s.store_id  WHERE UPPER(name) = UPPER($1)", [storeName])
  .then((result) => res.json(result.rows))
  .catch((e) => console.log(e));
};

exports.getAllStoreProducts = (req, res) => { 
  const storeId = req.params.storeId;

  pool
    .query("SELECT * FROM products WHERE store_id = $1", [storeId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
};

exports.findProductById = (req, res) => {
  const productId = req.params.productId;
  pool
    .query("SELECT * FROM products WHERE id = $1", [productId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.log(e));
};