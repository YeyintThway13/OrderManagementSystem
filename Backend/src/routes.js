const productRouter = require("./routers/product-routers");

exports.routes = (app) => {
  app.use("/api/v1/products", productRouter);
};
