const User = require("./user.model");

class Driver extends User {
  constructor(id, name, phoneNumber, suspend) {
    super(id, name, phoneNumber);
    this.suspend = suspend;
  }
}

module.exports = { Driver };
