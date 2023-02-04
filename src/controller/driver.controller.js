const { validateUser } = require("../models/user.model");
const driverService = require("../service/driver.service");
const customError = require("../utils/error");

// get one driver
const getById = async (req, res, next) => {
  try {
    const driver = await driverService.getDriver(parseInt(req.params.id));

    if (!driver) {
      customError("Driver does not exist", 404);
    }

    res.json(driver);
  } catch (error) {
    next(error);
  }
};

// get all drivers
const get = async (req, res, next) => {
  try {
    res.json(await driverService.getDrivers());
  } catch (error) {
    next(error);
  }
};

// create driver
const create = async (req, res, next) => {
  try {
    const { error } = validateUser(req.body);
    if (error) customError(error.details[0].message, 400);

    res.status(201).json(await driverService.createDriver(req.body));
  } catch (error) {
    next(error);
  }
};

// suspend driver
const suspend = async (req, res, next) => {
  try {
    res
      .status(204)
      .json(await driverService.suspendDriver(parseInt(req.params.id), true));
  } catch (error) {
    next(error);
  }
};

// unsuspend driver
const unSuspend = async (req, res, next) => {
  try {
    return res
      .status(204)
      .json(await driverService.suspendDriver(parseInt(req.params.id), false));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get,
  getById,
  suspend,
  unSuspend,
  create,
};
