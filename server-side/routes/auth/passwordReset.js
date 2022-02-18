const router = require("express").Router();
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");

router.put("/", async (req, res, next) => {
  const {password, token} = req.body;
  console.log("RESET PASS",password)
  try {
    const hashed = bcrypt.hashSync(password, 10);
    const user = await User.findOne({ where: { resetLink: token } });
    user.password = hashed;
    await user.save();
    res.json({passwordChanged: true});
  } catch (error) {
    res.status(400).json({error: error.message})
    next(error)
  }
});
module.exports = router;
