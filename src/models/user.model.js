const Joi = require("joi");
class User {
  constructor(id, name, phoneNumber) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}
const validateUser = (userDetails) => {
  const userSchema = Joi.object({
    name: Joi.string().required().min(3).max(40).required(),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
  });

  return userSchema.validate(userDetails);
};

module.exports = { User, validateUser };
