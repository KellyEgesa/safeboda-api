const express = require("express");
const convertId = require("../utils/convertId");
const { getById, get, create } = require("../controller/passenger.controller");

const router = express.Router();

// get one Passenger
router.get("/:id", convertId, getById);

// get all Passengers
router.get("/", get);

// creates new passenger
router.post("/", create);

module.exports = router;
