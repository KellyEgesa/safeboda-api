const jwt = require("jsonwebtoken");

// validates the token
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  try {
    jwt.verify(token, process.env.HASHKEY);
    next();
  } catch (error) {
    res.status(403).json("Forbidden");
  }
};
