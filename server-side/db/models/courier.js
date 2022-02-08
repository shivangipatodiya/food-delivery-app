const Sequelize = require("sequelize");
const db = require("../db");

const Courier = db.define("courier", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
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
    allowNull: false,
    get() {
      return () => this.getDataValue("password");
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue("salt");
    }
  }
});

Courier.prototype.correctPassword = function (password) {
  return Courier.encryptPassword(password, this.salt()) === this.password();
};

Courier.createSalt = function () {
  return crypto.randomBytes(16).toString("base64");
};

Courier.encryptPassword = function (plainPassword, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainPassword)
    .update(salt)
    .digest("hex");
};

const setSaltAndPassword = (courier) => {
  if (courier.changed("password")) {
    courier.salt = Courier.createSalt();
    courier.password = Courier.encryptPassword(
      courier.password(),
      courier.salt()
    );
  }
};

Courier.beforeCreate(setSaltAndPassword);
Courier.beforeUpdate(setSaltAndPassword);
Courier.beforeBulkCreate((couriers) => {
  couriers.forEach(setSaltAndPassword);
});

module.exports = Courier;
