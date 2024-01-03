const express = require("express");
const productController = require("../controllers/product-controllers");
const { authenticateRole } = require("../middlewares/auth-role");

const productRouter = express.Router({ mergeParams: true });

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:id", productController.getProductById);

productRouter.use(authenticateRole(["Admin"]));
productRouter.post("/", productController.createProduct);
productRouter.put("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);

module.exports = productRouter;
