require("dotenv").config();

const express = require("express");
const app = express();
const port = 3546;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("fooddelivery", "owner", "owner", {
  host: "localhost",
  dialect: "postgres"
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// sequelize
//   .authenticate()
//   .then(() => console.log("Connection has been established successfully."))
//   .catch((error) => console.error("Unable to connect to the database:", error));

// const { Pool } = require("pg");
// const dbParams = require("./db.js");
// const db = new Pool(dbParams);
// db.connect();

app.get("/", (req, res) => {
  res.send("Hungry! Order some food...");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
