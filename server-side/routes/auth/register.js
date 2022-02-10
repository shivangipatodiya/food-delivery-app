const router = require("express").Router();
const { User } = require("../../db/models");

router.post("/register", async (req, res, next) => {
  try {
    // expects {firstname, lastname, phonenumber, email, password} in req.body
    const { firstname, lastname, phone_number, password, email } = req.body;

    if (!firstname || !lastname || !phone_number || !password || !email) {
      return res
        .status(400)
        .json({ error: "FirstName, LastName, PhoneNumber, Password, and Email required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }
    req.body.password = bcrypt.hashSync(password, 10)
    const user = await User.create(req.body);

    res.json(user);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(401).json({ error: "User already exists" });
    } else if (error.name === "SequelizeValidationError") {
      return res.status(401).json({ error: "Validation error" });
    } else next(error);
  }
});
module.exports = router