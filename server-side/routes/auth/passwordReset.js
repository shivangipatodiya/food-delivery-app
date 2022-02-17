const { User } = require("../../db/models");
//const emailService = require("../../services/emailService");
const nodemailer = require('nodemailer');
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res, next) => {
  const {email} = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({error: "User with this email does not exist"})
    }

    const token = jwt.sign({ email }, process.env.RESET_SECRET, {
      expiresIn: "60m"
    });
    const data = {
      from: "noreply@hello.com",
      to: email,
      subject: "Password Reset Link",
      text: `Please click on provided link to reset the password. ${process.env.CLIENT_URL}/resetpassword/${token}`,
      html: `<h2> Please click on provided link to reset the password.</h2>
             <p>${process.env.CLIENT_URL}/resetpassword/${token}</p>`
    }
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'caroline.schroeder51@ethereal.email',
        pass: 'YZ5WzZTMK7NAwrX3vQ'
      },
    })

    const sent = await transporter.sendMail(data, (info)=> {
    console.log("SENT EMAIL", info)})
    if (!sent){console.log("error to send mail")}

    res.json({message: "Password reset link has been sent to the entered email"});
  } catch (error) {
    res.status(400).json({error: error.message})
    next(error)
  }
});
module.exports = router;