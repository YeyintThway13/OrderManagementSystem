const mongoose = require("mongoose");

const inventoryAdjustmentSchema = new mongoose.Schema(
  {
    ref_code: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
    adjustment_items: [
      {
        product_id: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
        },
        unit: {
          type: String,
          required: true,
        },
      },
    ],
    reason: {
      type: String,
      enum: ["theft", "damaged", "add", "purchase", "return"],
      required: true,
    },
    type: {
      type: String,
      enum: ["vendor", "warehouse"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "InventoryAdjustment",
  inventoryAdjustmentSchema
);
