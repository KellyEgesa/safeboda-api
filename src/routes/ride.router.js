const express = require("express");
const router = express.Router();
const convertId = require("../utils/convertId");
const {
  stop,
  create,
  ongoing,
  getById,
} = require("../controller/ride.controller");

//stop ride
router.post("/stop/:id", convertId, stop);

// creates new ride
router.post("/:passengerId/:id", create);

//ongoing rides
router.get("/ongoing", ongoing);

//get specific ride
router.get("/:id", convertId, getById);

module.exports = router;
