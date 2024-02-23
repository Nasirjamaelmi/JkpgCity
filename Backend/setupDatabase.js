const mysql = require("mysql");

const dbConfig = {
  host: "database",
  user: "root",
  password: "root",
  database: "jkpgcity",
};

// Create a MySQL connection
const db = mysql.createConnection(dbConfig);

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database");
});

// We are connected, create database tables if not existing

// creates table projects at startup sauce
db.query(
  `CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`,
  (err, result) => {
    if (err) {
      console.error("Error creating table: ", err);
      return;
    }
    console.log("Table created or already exists");
  }
);

module.exports = db;
