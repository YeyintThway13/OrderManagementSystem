const express = require("express");
const compression = require("compression");

const errorHandler = require("./middlewares/error-handling");
const { routes } = require("./routes");
const { AppError } = require("./utils/errors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  compression({
    level: 6,
    threshold: 50 * 1000,
    filter: shouldCompress,
  })
);

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    return false;
  }
  return compression.filter(req, res);
}

routes(app);

// 404 route
app.all("*", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

module.exports.app = app;
