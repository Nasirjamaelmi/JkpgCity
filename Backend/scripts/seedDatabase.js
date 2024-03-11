const db = require("../config/database");
const fs = require("fs");
const bcrypt = require('bcryptjs');
const saltRounds = 10; // Number of salt rounds for bcrypt

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
        console.error("Error creating venues table: ", err);
        return;
      }
      console.log("Venues table created or already exists");

      // Create users table
      db.query(
        `CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(255) NOT NULL UNIQUE,
          password_hash VARCHAR(255) NOT NULL,
          role VARCHAR(50) NOT NULL DEFAULT 'user',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`,
        (err, result) => {
          if (err) {
            console.error("Error creating users table: ", err);
            return;
          }
          console.log("Users table created or already exists");
          seedDatabase();
        }
      );
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
            console.error("Error inserting venue data: ", err);
          } else {
            console.log("Venue data inserted or updated: ", result);
          }
        }
      );
    });

    // Insert users data
    const users = [
      { username: "Yuji", password: "itadori", role: "admin" },
      { username: "Toji", password: "itadori", role: "admin" },
      // Add more users as needed
    ];

    // Define a recursive function to insert users
    const insertUser = (index) => {
      if (index === users.length) {
        console.log("All users inserted or updated!");
        return;
      }

      const user = users[index];
      // Hash the password using bcrypt
      bcrypt.hash(user.password, saltRounds, (hashError, hash) => {
        if (hashError) {
          console.log("Hashing Error: ", hashError);
        } else {
          // Insert the user with the hashed password and role into the "users" table
          db.query(
            `INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE password_hash=VALUES(password_hash), role=VALUES(role)`,
            [user.username, hash, user.role],
            (insertError) => {
              if (insertError) {
                console.log("INSERT ERROR: ", insertError);
              } else {
                console.log("User data inserted or updated!");
              }
              // Proceed to the next user
              insertUser(index + 1);
            }
          );
        }
      });
    };

    // Start inserting users from the beginning (index 0)
    insertUser(0);
  });
};


createTable();
