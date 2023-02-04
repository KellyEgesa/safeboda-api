const { PrismaClientKnownRequestError } = require("@prisma/client/runtime");

// ErrorHandler.js
const errorHandler = (err, req, res, next) => {
  let errStatus = err.statusCode || 500;
  let errMsg = err.message || "Something went wrong";

  // database errors
  if (err instanceof PrismaClientKnownRequestError) {
    errStatus = 400;

    if (err.code === "P2003")
      errMsg = err.meta.field_name.split("_")[1] + " does not exist";

    if (err.code === "P2002") errMsg = err.meta.target + " already exists";
  }

  res.status(errStatus).json({
    status: errStatus,
    message: errMsg,
  });
};
module.exports = errorHandler;
