const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    { id: user.email, password: user.password },
    process.env.HASHKEY
  );
};

module.exports = {
  generateToken,
};
