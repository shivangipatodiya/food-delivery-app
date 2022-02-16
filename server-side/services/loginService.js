const { User } = require("../../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginType = (body) => {
  const newUser = {};
  if (body.type === "direct") {
    if (!email || !password) {
      throw new Error("Email and password required");
    }
    newUser.email = body.data.email;
  } else if (body.type === "google") {
    newUser.email = body.data.profile.email;
    let split = body.data.profile.name.split(" ");
    newUser.firstname = split[0];
    newUser.lastname = split[1];
    newUser.google_id = body.data.tokenId;
  } else if (body.type === "fb") {
    newUser.email = body.data.email;
    let split = body.data.name.split(" ");
    newUser.firstname = split[0];
    newUser.lastname = split[1];
    newUser.facebook_id = body.data.accessToken;
  }

  const user = await User.findOne({
    attributes: [
      "id",
      "firstname",
      "lastname",
      "email",
      "password",
      "google_id",
      "facebook_id"
    ],
    where: {
      email: newUser.email
    },
    raw: true
  });

  if (body.password) {
    if (!user) {
      console.log({ error: `No user found for email: ${email}` });
      throw new Error("Wrong email and/or password");
    } else if (!bcrypt.compareSync(userPassword, user.password)) {
      console.log({ error: "Wrong password" });
      throw new Error("Wrong password");
    }
    const token = jwt.sign({ id: user.id }, process.env.SESSION_SECRET, {
      expiresIn: 86400
    });
    return {
      user: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
      },
      token
    };
  }

  if (user) {
    user.google_id = newUser.google_id;
    user.facebook_id = newUser.facebook_id;
    await user.save();
    const token = jwt.sign({ id: user.id }, process.env.SESSION_SECRET, {
      expiresIn: 86400
    });
    return {
      user: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email
      },
      token
    };
  }
  User.create(newUser);
  const token = jwt.sign({ id: user.id }, process.env.SESSION_SECRET, {
    expiresIn: 86400
  });
  return {
    user: {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    },
    token
  };
};
module.exports = {loginType};