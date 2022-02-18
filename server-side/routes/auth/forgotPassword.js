const { User } = require("../../db/models");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exist" });
    }

    const token = jwt.sign({ email }, process.env.RESET_SECRET, {
      expiresIn: "60m"
    });
    const msg = {
      from: "shivu2610@gmail.com",
      to: email,
      subject: "Password Reset Link",
      text: `Please click on provided link to reset the password. ${process.env.CLIENT_URL}/resetpassword/${token}`,
      html: `<h2> Please click on provided link to reset the password. The link will expire in 1 hour.</h2>
             <a href="${process.env.CLIENT_URL}/resetpassword/${token}">Reset Link</a>`
    };
    user.resetLink = token;
    await user.save();
    await sgMail.send(msg);

    console.log("Email sent");

    res.json({
      message: "Password reset link has been sent to the entered email"
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    next(error);
  }
});
module.exports = router;
