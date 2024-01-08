const cluster = require("cluster");
const os = require("os");
const http = require("http");

const { app } = require("./app");
const connectDb = require("./utils/database-connect");
const { createIO } = require("./utils/create-io");
const port = process.env.PORT || 3000;

const cpuCount = os.cpus().length;

const server = http.createServer(app);

createIO(server);

const getIo = () => {
  return io;
};

connectDb();

if (cluster.isMaster) {
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  server.listen(port, () => {
    console.log(`🚀 Server is listening on port ${port} pid ${process.pid}`);
  });
}

module.exports = { getIo };
