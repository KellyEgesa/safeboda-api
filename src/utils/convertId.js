module.exports = (req, res, next) => {
  let id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(422).json({ Error: "Ride id should be a number" });
  }

  next();
};
