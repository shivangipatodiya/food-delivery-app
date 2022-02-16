const { User } = require("../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginType = async (body) => {
  const newUser = {};
  if (body.type === "direct") {
    console.log("DIRECT PATH");
    if (!body.data.email || !body.data.password) {
      throw new Error("Email and password required");
    }
    newUser.email = body.data.email;
  } else if (body.type === "google") {
    console.log("GOOGLE");
    newUser.email = body.data.profile.email;
    let split = body.data.profile.name.split(" ");
    newUser.firstname = split[0];
    newUser.lastname = split[1];
    newUser.google_id = body.data.tokenId;
  } else if (body.type === "fb") {
    console.log("FACEBOOK");
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
    }
  });
  console.log("user is", user);
  if (body.data.password) {
    console.log("DIRECT PATH CONT");
    if (!user) {
      console.log({ error: `No user found for email: ${email}` });
      throw new Error("Wrong email and/or password");
    } else if (!user.password) {
      console.log({
        error: `User with email ${user.email} previously logged in through google or facebook.`
      });
      throw new Error(
        `User with email ${user.email} previously logged in through google or facebook.`
      );
    }
    if (!bcrypt.compareSync(body.data.password, user.password)) {
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
    console.log("THIRD PARTY LOGIN");
    if (body.type === "google") {
      user.google_id = newUser.google_id;
    }
    if (body.type === "fb") {
      user.facebook_id = newUser.facebook_id;
    }
    const updatedUser = await user.save();
    console.log("updateUser is", updatedUser);
    const token = jwt.sign({ id: updatedUser.id }, process.env.SESSION_SECRET, {
      expiresIn: 86400
    });
    return {
      user: {
        firstname: updatedUser.firstname,
        lastname: updatedUser.lastname,
        email: updatedUser.email
      },
      token
    };
  }
  console.log("THIRD PARTY SIGNUP");
  console.log("newUser is", newUser);
  const createdUser = await User.create(newUser);
  console.log("3rd createdUser", createdUser);
  const token = jwt.sign({ id: createdUser.id }, process.env.SESSION_SECRET, {
    expiresIn: 86400
  });
  return {
    user: {
      firstname: createdUser.firstname,
      lastname: createdUser.lastname,
      email: createdUser.email
    },
    token
  };
};
module.exports = { loginType };
