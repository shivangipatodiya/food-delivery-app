const router = require("express").Router();

// router.use("/messages", require("./messages"));
router.use("/register", require("./auth/register"));
router.use("/user", require("./user"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;