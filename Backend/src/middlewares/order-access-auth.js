const Order = require("../models/order-model");
const { AppError } = require("../utils/errors");

exports.authorizeOrderOperation = async (req, res, next) => {
  if (req.user.role === "Admin" || req.user.role === "Support") {
    req.defaultFilter = {};
    next();
  } else {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (order.createdBy !== req.user?._id) {
      return next(new AppError("Permission denied", 403));
    }

    // req.defaultFilter = { createdBy: req.user?._id };
    next();
  }
};

exports.authorizeOrderAccess = async (req, res, next) => {
  if (req.user.role === "Admin" || req.user.role === "Support") {
    req.defaultFilter = {};
    next();
  } else {
    req.defaultFilter = { createdBy: req.user?._id };
    next();
  }
};
