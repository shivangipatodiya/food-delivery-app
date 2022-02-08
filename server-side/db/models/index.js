const User = require("./user");
const Address = require("./address");
const Cart = require("./cart");
const Courier = require("./courier");
const DeliverySchedule = require("./delivery_schedule");
const Dish = require("./dish");
const Order = require("./order");
const Restaurant = require("./restaurant");

// associations

User.belongsToMany(Address, {through: "UsersAddresses"})
Address.belongsToMany(User, {through: "UsersAddresses"})
Courier.hasOne(Order);
Order.belongsTo(Courier);
User.hasOne(Cart);
Cart.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User)
Restaurant.hasMany(Dish);
Dish.belongsTo(Restaurant);

module.exports = {
  User,
  Address,
  Cart,
  Courier,
  DeliverySchedule,
  Dish,
  Order,
  Restaurant
};