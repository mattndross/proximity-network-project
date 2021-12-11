const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "proximity_network",
  password: "fran1985",
  port: 5432,
});

//QUERIES
const searchByPostalCodeQuery =
  "SELECT name, store_description as Description, store_category as Category, web_page as Web, store_email as email, phone_number, image FROM stores as s join stores_locations as s_l on s_l.store_id = s.store_id WHERE postcode = $1";
const searchByCityQuery =
  "SELECT name, store_description as Description, store_category as Category, web_page as Web, store_email as email, phone_number, image FROM stores as s join stores_locations as s_l on s_l.store_id = s.store_id WHERE upper(city) = upper($1)";

exports.searchController = (req, res) => {
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
