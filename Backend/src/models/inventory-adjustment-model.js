const mongoose = require("mongoose");
const Product = require("./product-model");

const inventoryAdjustmentSchema = new mongoose.Schema(
  {
    ref_code: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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

  for (let i = 0; i < this.adjustment_items.length; i++) {
    const item = this.adjustment_items[i];
    const product = await Product.findById(item.product_id);

    if (item.quantity > product.stock_quantity) {
      throw new Error("Stock not enough");
      return;
    }

    await Product.findByIdAndUpdate(product._id, {
      stock_quantity: product.stock_quantity - item.quantity,
    });
  }

  next();
});

module.exports = mongoose.model(
  "InventoryAdjustment",
  inventoryAdjustmentSchema
);
