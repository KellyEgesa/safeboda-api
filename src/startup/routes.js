const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("../middleware/errorHandler");
const admin = require("../routes/admin");
const driver = require("../routes/driver.router");
const passenger = require("../routes/passenger.router");
const ride = require("../routes/ride.router");
const auth = require("../middleware/auth");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(morgan("combined"));
  app.use(cors());

  app.use("/admin", admin);

  app.use("/driver", driver);
  app.use("/passenger", auth, passenger);
  app.use("/ride", ride);

  // ERROR HANDLER MIDDLEWARE (Last middleware to use)
  app.use(errorHandler);
};
