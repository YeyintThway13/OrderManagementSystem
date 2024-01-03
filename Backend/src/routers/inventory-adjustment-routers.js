const express = require("express");
const inventoryAdjustmentControllers = require("../controllers/inventory-adjustment-controllers");
const { authenticateRole } = require("../middlewares/auth-role");

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
  inventoryAdjustmentControllers.createInventoryAdjustment
);
inventoryAdjustmentRouter.put(
  "/:id",
  inventoryAdjustmentControllers.updateInventoryAdjustment
);
inventoryAdjustmentRouter.delete(
  "/:id",
  inventoryAdjustmentControllers.deleteInventoryAdjustment
);

module.exports = inventoryAdjustmentRouter;
