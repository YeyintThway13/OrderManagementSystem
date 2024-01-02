const express = require("express");
const orderController = require("../controllers/order-controllers");

const orderRouter = express.Router({ mergeParams: true });

orderRouter.get("/", orderController.getAllOrders);
orderRouter.get("/:id", orderController.getOrderById);
orderRouter.post("/", orderController.createOrder);
orderRouter.put("/:id", orderController.updateOrder);
orderRouter.delete("/:id", orderController.deleteOrder);

module.exports = orderRouter;
