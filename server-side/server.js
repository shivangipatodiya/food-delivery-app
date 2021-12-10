require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const { Pool } = require("pg");
const dbParams = require("./db.js");
const db = new Pool(dbParams);
db.connect();



app.get('/', (req, res) => {
  res.send('Hungry! Order some food...')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})