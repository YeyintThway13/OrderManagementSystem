const socketIO = require("socket.io");
const jwt = require("jsonwebtoken");

let io;

const createIO = async (server) => {
  io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("A user connected");

    // Handle joining a specific order room
    socket.on("joinUserRoom", (token) => {
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);

      if (user?.role === "Customer") {
        socket.join(user?._id);
        console.log(`User joined room ${user?._id}`);
      } else {
        socket.join("Stuff");
        console.log(`User joined admin and support room`);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

const getIO = () => {
  return io;
};

module.exports = { createIO, getIO };
