const router = require("express").Router();
const loginServices = require("../../services/loginService");
router.post("/", async (req, res, next) => {
  try {
    const data = await loginServices.loginType(req.body);
    res.json(data);
  } catch (error) {
    res.status(400).json({error: error.message})
    next(error)
  }
});
module.exports = router;
