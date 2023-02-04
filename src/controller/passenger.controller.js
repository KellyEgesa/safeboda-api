const passengerService = require("../service/passenger.service");
const { validateUser } = require("../models/user.model");
const customError = require("../utils/error");

// get one Passenger
const getById = async (req, res, next) => {
  try {
    const passenger = await passengerService.getPassenger(
      parseInt(req.params.id)
    );

    if (!passenger) {
      customError("Passenger does not exist", 404);
    }

    res.json(passenger);
  } catch (error) {
    next(error);
  }
};

// get all Passengers
const get = async (req, res, next) => {
  try {
    res.json(await passengerService.getPassengers());
  } catch (error) {
    next(error);
  }
};

// creates new passenger
const create = async (req, res, next) => {
  try {
    const { error } = validateUser(req.body);
    if (error) customError(error.details[0].message, 400);

    res.status(201).json(await passengerService.createPassenger(req.body));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get,
  getById,
  create,
};
