const { app } = require("./app");
const connectDb = require("./utils/database-connect");
const port = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
