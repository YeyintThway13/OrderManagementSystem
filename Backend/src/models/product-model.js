const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    item_code: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sale_price: {
      type: Number,
      required: true,
    },
    stock_quantity: {
      type: Number,
    },
    unit: {
      type: String,
    },
    stock_thresh_hold_value: {
      type: Number,
    },
    returnable: {
      type: Boolean,
      required: true,
      default: false,
    },
    created_by: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

productSchema.index({ item_code: 1, name: "text", description: "text" });

productSchema.pre("save", async function (next) {
  if (!this.created_by) {
    this.created_by = this.createdBy;
  }

  next();
});

module.exports = mongoose.model("Product", productSchema);
