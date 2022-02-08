const Sequelize = require("sequelize");
const db = require("../db");

const Dish = db.define("dish", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Dish;
