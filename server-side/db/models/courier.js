const Sequelize = require("sequelize");
const db = require("../db");

const Courier = db.define("courier", {
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
    alloWNull: false
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
    allowNull: false
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


module.exports = Courier;
