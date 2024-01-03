const mongoose = require("mongoose");

const inventoryAdjustmentSchema = new mongoose.Schema(
  {
    ref_code: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    vendor: {
      type: String,
    },
    adjusted_by: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
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
  },
  { timestamps: true }
);

inventoryAdjustmentSchema.pre("save", async function (next) {
  if (!this.adjusted_by) {
    this.adjusted_by = this.createdBy;
  }

  next();
});

module.exports = mongoose.model(
  "InventoryAdjustment",
  inventoryAdjustmentSchema
);
