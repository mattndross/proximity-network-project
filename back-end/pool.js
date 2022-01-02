const { Pool } = require('pg');
exports.pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'proximity_network',
    password: '1234',//1234
    port: 5432
});
