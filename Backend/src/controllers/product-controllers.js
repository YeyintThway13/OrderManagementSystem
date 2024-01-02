const Product = require("../models/product-model");
const {
  createOne,
  deleteOne,
  getAll,
  getOneById,
  updateOne,
} = require("./base-controllers");

exports.getAllProducts = getAll(Product, ["name", "item_code", "description"]);
exports.getProductById = getOneById(Product);
exports.createProduct = createOne(Product);
exports.updateProduct = updateOne(Product);
exports.deleteProduct = deleteOne(Product);
