const express = require("express");
const inventoryAdjustmentControllers = require("../controllers/inventory-adjustment-controllers");
const { authenticateRole } = require("../middlewares/auth-role");
const { validate } = require("../middlewares/validate");
const {
  inventoryAdjustmentCreateValidationRules, inventoryAdjustmentUpdateValidationRules,
} = require("../Schemas/inventory-adjustment-schema");

const inventoryAdjustmentRouter = express.Router({ mergeParams: true });

inventoryAdjustmentRouter.use(authenticateRole(["Admin", "Support"]));

inventoryAdjustmentRouter.get(
  "/",
  inventoryAdjustmentControllers.getAllInventoryAdjustments
);
inventoryAdjustmentRouter.get(
  "/:id",
  inventoryAdjustmentControllers.getInventoryAdjustmentById
);
inventoryAdjustmentRouter.post(
  "/",
  inventoryAdjustmentCreateValidationRules(),
  validate([
    "ref_code",
    "description",
    "date",
    "vendor",
    "adjusted_by",
    "adjustment_items",
    "reason",
  ]),
  inventoryAdjustmentControllers.createInventoryAdjustment
);
inventoryAdjustmentRouter.put(
  "/:id",
  inventoryAdjustmentUpdateValidationRules(),
  validate([
    "ref_code",
    "description",
    "date",
    "vendor",
    "adjusted_by",
    "adjustment_items",
    "reason",
  ]),
  inventoryAdjustmentControllers.updateInventoryAdjustment
);
inventoryAdjustmentRouter.delete(
  "/:id",
  inventoryAdjustmentControllers.deleteInventoryAdjustment
);

module.exports = inventoryAdjustmentRouter;
