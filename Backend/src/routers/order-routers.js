const express = require("express");
const orderController = require("../controllers/order-controllers");
const { authenticateRole } = require("../middlewares/auth-role");
const {
  authorizeOrderAccess,
  authorizeOrderOperation,
} = require("../middlewares/order-access-auth");

const orderRouter = express.Router({ mergeParams: true });

orderRouter.use(authenticateRole(["Admin", "Support", "Customer"]));

orderRouter.get("/", authorizeOrderAccess, orderController.getAllOrders);
orderRouter.get("/:id", authorizeOrderOperation, orderController.getOrderById);
orderRouter.post("/", orderController.createOrder);
orderRouter.put("/:id", authorizeOrderOperation, orderController.updateOrder);
orderRouter.delete(
  "/:id",
  authorizeOrderOperation,
  orderController.deleteOrder
);

module.exports = orderRouter;
