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

module.exports = Order;
