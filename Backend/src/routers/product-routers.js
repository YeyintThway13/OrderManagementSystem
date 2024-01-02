const express = require("express");
const productController = require("../controllers/product-controllers");

const productRouter = express.Router({ mergeParams: true });

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);
productRouter.post("/", productController.createProduct);
productRouter.put("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);

module.exports = productRouter;
