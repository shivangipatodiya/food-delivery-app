const router = require("express").Router();

router.use("/login", require("./auth/login"));
router.use("/forgot-password", require("./auth/forgotPassword"));
router.use("/reset", require("./auth/passwordReset"));
router.use("/register", require("./auth/register"));
router.use("/user", require("./user"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
