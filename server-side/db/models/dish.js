const Sequelize = require("sequelize");
const db = require("../db");

const Dish = db.define("dish", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
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

module.exports = Dish;
