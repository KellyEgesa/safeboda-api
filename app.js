const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require("./src/startup/prod")(app);
require("./src/startup/routes")(app);

const server = app.listen(port, () =>
  console.log(`App is available on port: ${port}!`)
);

module.exports = server;
