const express = require("express");
const userController = require("../controllers/user-controllers");
const { authenticateRole } = require("../middlewares/auth-role");

const userRouter = express.Router({ mergeParams: true });

userRouter.post("/register", userController.registerUser);
userRouter.post("/login", userController.loginUser);
userRouter.post("/refresh", userController.refreshToken);
userRouter.post(
  "/create",
  authenticateRole(["Admin"]),
  userController.createAccount
);

module.exports = userRouter;
