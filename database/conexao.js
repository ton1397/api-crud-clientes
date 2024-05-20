
const mysql = require('mysql2/promise');

require('dotenv').config()
 
const client = mysql.createPool(process.env.DATABASE_URL);

module.exports = client;
