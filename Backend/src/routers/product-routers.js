const express = require("express");
const productController = require("../controllers/product-controllers");
const { authenticateRole } = require("../middlewares/auth-role");
const { validate } = require("../middlewares/validate");
const {
  productCreateValidationRules,
  productUpdateValidationRules,
} = require("../Schemas/product-schema");

const productRouter = express.Router({ mergeParams: true });

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);

productRouter.use(authenticateRole(["Admin"]));
productRouter.post(
  "/",
  productCreateValidationRules(),
  validate([
    "item_code",
    "name",
    "description",
    "sale_price",
    "stock_quantity",
    "unit",
    "stock_thresh_hold_value",
    "returnable",
    "created_by",
  ]),
  productController.createProduct
);
productRouter.put(
  "/:id",
  productUpdateValidationRules(),
  validate([
    "item_code",
    "name",
    "description",
    "sale_price",
    "stock_quantity",
    "unit",
    "stock_thresh_hold_value",
    "returnable",
    "created_by",
  ]),
  productController.updateProduct
);
productRouter.delete("/:id", productController.deleteProduct);

module.exports = productRouter;
