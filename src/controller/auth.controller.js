const Joi = require("joi");
const { generateToken } = require("../utils/generateToken");

// login
const login = (req, res) => {
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const token = generateToken(req.body);

  const validEmail = process.env.ADMIN_EMAIL == req.body.email ? true : false;
  const validPassword =
    process.env.ADMIN_PASSWORD == req.body.password ? true : false;

  if (!validEmail) return res.status(404).json({ error: "Email not found" });

  if (!validPassword)
    return res.status(400).json({ error: "Invalid password" });

  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .json({ token: token });
};

const validateLogin = (loginCredentials) => {
  const logInSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(3).max(40).required(),
  });

  return logInSchema.validate(loginCredentials);
};

module.exports = login;
