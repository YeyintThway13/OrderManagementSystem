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
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
