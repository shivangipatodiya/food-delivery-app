const Sequelize = require("sequelize");
const db = require("../db");

const Restaurant = db.define("restaurant", {
  address_line1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address_line2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  postal_code: {
    type: Sequelize.STRING,
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

module.exports = Restaurant;
