const { body } = require("express-validator");

const orderCreateValidationRules = () => {
  return [
    body("order_code").notEmpty().isString(),
    body("products").isArray(),
    body("products.*.product_id").isString(),
    body("products.*.quantity").isInt(),
    body("products.*.unit").isString(),
    body("expected_shipment_date").notEmpty().isDate(),
    body("delivery_method").notEmpty().isString(),
    body("customer_note").notEmpty().isString(),
    body("payment_method").notEmpty().isString(),
    body("payment_status")
      .optional()
      .isString()
      .isIn(["Pending", "Done", "Cancelled"]),
    body("status")
      .optional()
      .isString()
      .isIn([
        "Processing",
        "Delivered",
        "Cancelled",
        "PickupAvailable",
        "Problem",
        "Returned",
      ]),
  ];
};

const orderUpdateValidationRules = () => {
  return [
    body("order_code").optional().isString(),
    body("products").optional().isArray(),
    body("products.*.product_id").isString(),
    body("products.*.quantity").isInt(),
    body("products.*.unit").isString(),
    body("expected_shipment_date").optional().isDate(),
    body("delivery_method").optional().isString(),
    body("customer_note").optional().isString(),
    body("payment_method").optional().isString(),
    body("payment_status")
      .optional()
      .isString()
      .isIn(["Pending", "Done", "Cancelled"]),
    body("status")
      .optional()
      .isString()
      .isIn([
        "Processing",
        "Delivered",
        "Cancelled",
        "PickupAvailable",
        "Problem",
        "Returned",
      ]),
  ];
};

module.exports = {
  orderCreateValidationRules,
  orderUpdateValidationRules,
};
