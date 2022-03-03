const { Dish } = require("../db/models");
const router = require("express").Router();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("ID is ", id);
    const dishes = await Dish.findAll({
      where: {
        restaurant_id: id
      }
    });

    res.json(dishes);
    console.log("$$$$$$", dishes);
  } catch (e) {
    res.status(400).send({error: e.message})
    console.log(e);
  }
});
module.exports = router;
