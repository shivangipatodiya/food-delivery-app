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
  // imageUrl: {
  //   field: "image_url",
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
  },
  restaurantId: {
    field: "restaurant_id",
    type: Sequelize.INTEGER,
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
