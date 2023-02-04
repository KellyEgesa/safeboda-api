const express = require("express");
const router = express.Router();
const convertId = require("../utils/convertId");

const {
  get,
  getById,
  create,
  suspend,
  unSuspend,
} = require("../controller/driver.controller");

// get one driver
router.get("/:id", convertId, getById);

// get all drivers
router.get("/", get);

// create driver
router.post("/", create);

// suspend driver
router.post("/:id/suspend", convertId, suspend);

// unsuspend driver
router.delete("/:id/suspend", convertId, unSuspend);

module.exports = router;
