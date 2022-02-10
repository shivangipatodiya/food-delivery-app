const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  uuid: {
    field: "id",
    type: Sequelize.DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Cart;
