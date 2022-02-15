require("dotenv").config();
const db = require("./db");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3546;
const { User } = require("./db/models");


const bodyParser = require("body-parser");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(async (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log(req.headers)
  if (!token) {
    console.log("TOKEN IS ", token)
    return next()
  }
  try {
    const decoded = jwt.verify(token, process.env.SESSION_SECRET);
    const user = await User.findOne({
      where: { id: decoded.id }
    });
    req.user = user;
    return next();
  } catch (e) {
    return next()
  }
});

app.get("/", (req, res) => {
  res.send("Hungry! Order some food...");
});

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
