const db = require("./database");
const fs = require("fs");

db.query(
  `CREATE TABLE IF NOT EXISTS venues (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  district VARCHAR(255) NOT NULL,
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

fs.readFile("./stores.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  seedDatabase(data);
});

const seedDatabase = (data) => {
  const jsonData = JSON.parse(data);

  jsonData.forEach((store) => {
    // Add to database
    db.query(
      `INSERT INTO venues (name, url, district) VALUES (?, ?, ?)`,
      [store.name, store.url, store.district],
      (err, result) => {
        if (err) {
          console.error("Error inserting data: ", err);
          return;
        }
        console.log("Data inserted: ", result);
      }
    );
  });
}