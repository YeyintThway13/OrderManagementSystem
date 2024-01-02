const express = require("express");
const errorHandler = require("./middlewares/error-handling");

const { routes } = require("./routes");
const { AppError } = require("./utils/errors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

// 404 route
app.all("*", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

module.exports.app = app;
