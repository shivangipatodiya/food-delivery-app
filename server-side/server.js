require("dotenv").config();
const db = require("./db");
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

// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("fooddelivery", "owner", "owner", {
//   host: "localhost",
//   dialect: "postgres"
// });
// const connectDb = async () => {
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }}
// connectDb();`

app.get("/", (req, res) => {
  res.send("Hungry! Order some food...");
});

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
