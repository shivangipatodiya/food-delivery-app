const router = require("express").Router();
import loginServices from "../../services/loginService";
router.post("/", async (req, res, next) => {
  try {
    const data = await loginServices.loginType(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
