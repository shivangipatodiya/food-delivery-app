const router = require("express").Router();
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
router.post("/", async (req, res, next) => {
  try {
    // expects {firstname, lastname, phonenumber, email, password} in req.body
    const { firstName, lastName, phoneNumber, password, email } = req.body;

    if (!firstName || !lastName || !phoneNumber || !password || !email) {
      return res.status(400).json({
        error: "FirstName, LastName, PhoneNumber, Password, and Email required"
      });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }
    const hashed = bcrypt.hashSync(password, 10);
    console.log("PASSWORD IS __ ", hashed);

    const user = await User.create({
      firstname: firstName,
      lastname: lastName,
      phone_number: phoneNumber,
      email,
      password: hashed
    });

    const token = jwt.sign({ id: user.id }, process.env.SESSION_SECRET, {
      expiresIn: 86400
    });
    res.json({
      user: {
        firstname: firstName,
        lastname: lastName,
        email: email
      },
      token
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(401).json({ error: "User already exists" });
    } else if (error.name === "SequelizeValidationError") {
      console.log("err", error);
      return res.status(401).json({ error: "Validation error" });
    } else next(error);
  }
});
module.exports = router;
