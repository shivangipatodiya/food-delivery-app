const { Restaurant } = require("../db/models");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
    console.log("$$$$$$",restaurants)
  }
  catch(e) {console.log(e)}
})
module.exports = router