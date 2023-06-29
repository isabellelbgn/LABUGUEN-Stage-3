const express = require("express");
const mysql = require("mysql");

const appsql = express();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL server:", error);
    return;
  }
  console.log("Connected to MySQL server");
});

const createDatabaseQuery = "CREATE DATABASE IF NOT EXISTS sysdev_recruitment";
connection.query(createDatabaseQuery, (error) => {
  if (error) {
    console.error("Error creating a database: ", error);
    return;
  }
  console.log("Database 'sysdev_recruitment' created");
});

const createTableQuery = `CREATE TABLE IF NOT EXISTS programming_languages (
    id INT NOT NULL AUTO_INCREMENT,
    favorites VARCHAR(255),
    PRIMARY KEY (id)
)`;

appsql.get("/programming-language/new", (request, response) => {
  const favoriteLanguage = request.query.favorites;

  const insertQuery =
    "INSERT INTO programming_languages (favorites) VALUES (?)";
  connection.query(insertQuery, [favoriteLanguage], (error) => {
    if (error) {
      console.error("Error inserting data into table: ", error);
      return;
    }
    console.log("Data inserted into table");
    response.send("Data inserted into table");
  });
});

appsql.listen(3000, () => {
  console.log("Server is running on port 3000");
});
