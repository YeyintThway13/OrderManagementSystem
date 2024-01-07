const express = require("express");
const orderController = require("../controllers/order-controllers");
const { authenticateRole } = require("../middlewares/auth-role");
const {
  authorizeOrderAccess,
  authorizeOrderOperation,
} = require("../middlewares/order-access-auth");
const { validate } = require("../middlewares/validate");
const {
  orderCreateValidationRules,
  orderUpdateValidationRules,
} = require("../Schemas/order-schema");

const orderRouter = express.Router({ mergeParams: true });

orderRouter.use(authenticateRole(["Admin", "Support", "Customer"]));

orderRouter.get("/", authorizeOrderAccess, orderController.getAllOrders);
orderRouter.get("/:id", authorizeOrderOperation, orderController.getOrderById);
orderRouter.post(
  "/",
  orderCreateValidationRules(),
  validate([
    "order_code",
    "products",
    "expected_shipment_date",
    "delivery_method",
    "customer_note",
    "payment_method",
    "payment_status",
    "status",
    "order_by",
  ]),
  orderController.createOrder
);
orderRouter.put(
  "/:id",
  authorizeOrderOperation,
  orderUpdateValidationRules(),
  validate([
    "order_code",
    "products",
    "expected_shipment_date",
    "delivery_method",
    "customer_note",
    "payment_method",
    "payment_status",
    "status",
    "order_by",
  ]),
  orderController.updateOrder
);
orderRouter.delete(
  "/:id",
  authorizeOrderOperation,
  orderController.deleteOrder
);

module.exports = orderRouter;
