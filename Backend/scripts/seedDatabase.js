const db = require("../config/database");
const fs = require("fs");


const createTable = () => {
  db.query(
    `CREATE TABLE IF NOT EXISTS venues (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      url VARCHAR(255) NOT NULL,
      district VARCHAR(255) NOT NULL,
      venueType VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE KEY unique_name (name)
    )`,
    (err, result) => {
      if (err) {
        console.error("Error creating table: ", err);
        return;
      }
      console.log("Table created or already exists");
      seedDatabase();
    }
  );
};


const seedDatabase = () => {
  fs.readFile("/usr/src/backend/data/stores.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const jsonData = JSON.parse(data);
    jsonData.forEach((store) => {
      db.query(
        `INSERT INTO venues (name, url, district, venueType) VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE url=VALUES(url), district=VALUES(district), venueType=VALUES(venueType)`,
        [store.name, store.url, store.district, store.venueType],
        (err, result) => {
          if (err) {
            console.error("Error inserting data: ", err);
            return;
          }
          console.log("Data inserted or updated: ", result);
        }
      );
    });
  });
};


createTable();
