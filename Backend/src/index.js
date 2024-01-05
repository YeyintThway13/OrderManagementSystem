const cluster = require("cluster");
const os = require("os");

const { app } = require("./app");
const connectDb = require("./utils/database-connect");
const port = process.env.PORT || 3000;

const cpuCount = os.cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  app.listen(port, () => {
    console.log(`🚀 Server is listening on port ${port} pid ${process.pid}`);
  });
}

connectDb();
