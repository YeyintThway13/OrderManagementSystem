const InventoryAdjustment = require("../models/inventory-adjustment-model");
const {
  createOne,
  deleteOne,
  getAll,
  getOneById,
  updateOne,
} = require("./base-controllers");

exports.getAllInventoryAdjustments = getAll(InventoryAdjustment, ["ref_code"]);
exports.getInventoryAdjustmentById = getOneById(InventoryAdjustment);
exports.createInventoryAdjustment = createOne(InventoryAdjustment);
exports.updateInventoryAdjustment = updateOne(InventoryAdjustment);
exports.deleteInventoryAdjustment = deleteOne(InventoryAdjustment);
