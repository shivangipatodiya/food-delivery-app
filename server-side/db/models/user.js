const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  firstname: {
    field: "first_name",
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    field: "last_name",
    type: Sequelize.STRING,
    allowNull: false
  },
  phone_number: {
    type: Sequelize.STRING,
    alloWNull: true
  },
  google_id: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: true
  },
  facebook_id: {
    type: Sequelize.TEXT,
    unique: true,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    alloWNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      min: 6
    },
    allowNull: true,
  },
  resetLink: {
    field: "reset_link",
    type:Sequelize.TEXT,
    default:""
  },
  createdAt: {
    field: "created_at",
    type: Sequelize.DATE
  },
  updatedAt: {
    field: "updated_at",
    type: Sequelize.DATE
  }
});

module.exports = User;
