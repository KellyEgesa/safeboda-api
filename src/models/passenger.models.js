const User = require("./user.model");

class Passenger extends User {
  constructor(id, name, phoneNumber) {
    super(id, name, phoneNumber);
  }
}

module.exports = { Passenger };
