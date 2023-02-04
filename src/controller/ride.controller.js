const Joi = require("joi");
const customError = require("../utils/error");
const rideService = require("../service/ride.service");
const driverService = require("../service/driver.service");

//stop ride
const stop = async (req, res, next) => {
  try {
    res.json(await rideService.stopRide(parseInt(req.params.id)));
  } catch (error) {}
};

// creates new ride
const create = async (req, res, next) => {
  try {
    const { error } = validateRide(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });

    const driver = await driverService.getDriver(req.body.driverId);
    if (driver.suspended) {
      customError("Driver is Suspended", 400);
    }

    res.json(await rideService.createRide(req.body));
  } catch (error) {
    next(error);
  }
};

//ongoing rides
const ongoing = async (req, res, next) => {
  try {
    res.json(await rideService.getOngoingRides());
  } catch (error) {
    next(error);
  }
};

//get specific ride
const getById = async (req, res, next) => {
  try {
    res.json(await rideService.getRide(parseInt(req.params.id)));
  } catch (error) {
    next(error);
  }
};

const validateRide = (rideDetails) => {
  const rideSchema = Joi.object({
    passengerId: Joi.number().required(),
    driverId: Joi.number().required(),
    pickUpPoint: Joi.string(),
    destPoint: Joi.string(),
  });

  return rideSchema.validate(rideDetails);
};

module.exports = { create, getById, stop, ongoing };
