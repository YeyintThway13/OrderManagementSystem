const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    order_code: {
      type: String,
      required: true,
    },
    products: [
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
    expected_shipment_date: {
      type: Date,
      required: true,
    },
    delivery_method: {
      type: String,
      required: true,
    },
    customer_note: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    payment_status: {
      type: String,
      enum: ["Pending", "Done", "Cancelled"],
      required: true,
      default: "Pending",
    },
    status: {
      type: String,
      enum: [
        "Processing",
        "Delivered",
        "Cancelled",
        "PickupAvailable",
        "Problem",
        "Returned",
      ],
      required: true,
      default: "Processing",
    },
    order_by: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

orderSchema.pre("save", async function (next) {
  if (!this.order_by) {
    this.order_by = this.createdBy;
  }

  next();
});

module.exports = mongoose.model("Order", orderSchema);
