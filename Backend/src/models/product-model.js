const mongoose = require("mongoose");

const { getIO } = require("../utils/create-io");

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

productSchema.pre("findOneAndUpdate", async function (next) {
  const io = getIO();
  const productId = this?._conditions?._id;
  if (this._update?.stock_quantity) {
    const updatedQuantity = this._update?.stock_quantity;
    io.emit("productQuantityUpdate", { productId, updatedQuantity });
  }
});

module.exports = mongoose.model("Product", productSchema);
