const orderRouter = require("./routers/order-routers");
const productRouter = require("./routers/product-routers");

exports.routes = (app) => {
  app.use("/api/v1/products", productRouter);
  app.use("/api/v1/orders", orderRouter);
};
