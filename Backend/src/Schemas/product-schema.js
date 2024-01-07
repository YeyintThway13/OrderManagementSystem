const { body } = require("express-validator");

const productCreateValidationRules = () => {
  return [
    body("item_code").notEmpty().isString(),
    body("name").notEmpty().isString(),
    body("description").notEmpty().isLength({ min: 6 }),
    body("sale_price").notEmpty().isFloat(),
    body("stock_quantity").optional().isInt(),
    body("unit").optional().isString(),
    body("stock_thresh_hold_value").optional().isInt(),
    body("returnable").notEmpty().isBoolean(),
  ];
};

const productUpdateValidationRules = () => {
  return [
    body("item_code").optional().isString(),
    body("name").optional().isString(),
    body("description").optional().isLength({ min: 6 }),
    body("sale_price").optional().isFloat(),
    body("stock_quantity").optional().isInt(),
    body("unit").optional().isString(),
    body("stock_thresh_hold_value").optional().isInt(),
    body("returnable").optional().isBoolean(),
  ];
};

module.exports = {
  productCreateValidationRules,
  productUpdateValidationRules,
};
