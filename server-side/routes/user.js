const router = require("express").Router();
const { User } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        id: 2
      }
    });
    console.log("++++++++", users)
  }
  catch(e) {console.log(e)}
})
module.exports = router