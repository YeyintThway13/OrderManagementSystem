const Order = require("../models/order-model");
const {
  createOne,
  deleteOne,
  getAll,
  getOneById,
  updateOne,
} = require("./base-controllers");

exports.getAllOrders = getAll(Order, ["order_code"]);
exports.getOrderById = getOneById(Order);
exports.createOrder = createOne(Order);
exports.updateOrder = updateOne(Order);
exports.deleteOrder = deleteOne(Order);
