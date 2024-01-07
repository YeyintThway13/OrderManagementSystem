const { body } = require("express-validator");

const inventoryAdjustmentCreateValidationRules = () => {
  return [
    body("ref_code").notEmpty().isString(),
    body("adjustment_items").isArray(),
    body("adjustment_items.*.product_id").isString(),
    body("adjustment_items.*.quantity").isInt(),
    body("adjustment_items.*.unit").isString(),
    body("date").notEmpty().isDate(),
    body("description").optional().isString(),
    body("vendor").optional().isString(),
    body("reason")
      .optional()
      .isString()
      .isIn(["theft", "damaged", "add", "purchase", "return"]),
  ];
};

const inventoryAdjustmentUpdateValidationRules = () => {
  return [
    body("ref_code").optional().isString(),
    body("adjustment_items").optional().isArray(),
    body("adjustment_items.*.product_id").isString(),
    body("adjustment_items.*.quantity").isInt(),
    body("adjustment_items.*.unit").isString(),
    body("date").optional().isDate(),
    body("description").optional().isString(),
    body("vendor").optional().isString(),
    body("reason")
      .optional()
      .isString()
      .isIn(["theft", "damaged", "add", "purchase", "return"]),
  ];
};

module.exports = {
  inventoryAdjustmentCreateValidationRules,
  inventoryAdjustmentUpdateValidationRules,
};
