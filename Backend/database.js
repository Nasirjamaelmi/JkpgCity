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

module.exports = db;
