const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  dish_quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = Order;
