const router = require("express").Router();
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res, next) => {
  try {
    // expects username and password in req.body
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and password required" });

    const user = await User.findOne({
      attributes: ["id", "firstname", "lastname", "email", "password"],
      where: {
        email: req.body.email
      },
      raw: true
    });
    console.log("++++++KJKJKJK", user);

    if (!user) {
      console.log({ error: `No user found for email: ${email}` });
      res.status(401).json({ error: "Wrong email and/or password" });
    } else if (!bcrypt.compareSync(password, user.password)) {
      console.log({ error: "Wrong password" });
      res.status(401).json({ error: "Wrong password" });
    } else {
      const token = jwt.sign({ id: user.id }, process.env.SESSION_SECRET, {
        expiresIn: 86400
      });
      res.json({
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email
        },
        token
      });
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
