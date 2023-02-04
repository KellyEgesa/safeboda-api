module.exports = (message, statusCode) => {
  let error = new Error(message);
  error.statusCode = statusCode;
  throw error;
};
