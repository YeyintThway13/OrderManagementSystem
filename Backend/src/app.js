const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");

const errorHandler = require("./middlewares/error-handling");
const { routes } = require("./routes");
const { AppError } = require("./utils/errors");

const app = express({ limit: "3mb" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(limiter);

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
