const { Restaurant } = require("../db/models");
const router = require("express").Router();
const haversine = require("haversine");

router.post("/", async (req, res, next) => {
  try {
    const { address, city, province, postalCode, latitude, longitude } =
      req.body;
    const end = { latitude, longitude };
    const restaurants = await Restaurant.findAll();
    const nearbyRestaurants = restaurants.filter((restaurant) => {
      let start = {
        latitude: restaurant.latitude,
        longitude: restaurant.longitude
      };
     return haversine(start, end, { threshold: 10 });
    });
    console.log('++++++NEARBY', nearbyRestaurants);
    res.json(nearbyRestaurants);
    console.log("$$$$$$", restaurants);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
