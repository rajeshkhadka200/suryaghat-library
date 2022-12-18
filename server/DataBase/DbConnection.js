require("dotenv").config();
const mysql = require("mysql");
const db = mysql.createPool({
  connectionLimit: 100,
  host: '127.0.0.1',
  user: 'root',
  password: 'zirea@@35',
  database: 'suryagha_db',
  port: '3306'
});

module.exports = db;
