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

userRouter.put(
  "/update-profile",
  authenticateRole(["Admin", "Customer", "Support"]),
  userController.updateProfile
);

userRouter.delete(
  "/delete-profile",
  authenticateRole(["Admin", "Customer", "Support"]),
  userController.deleteProfile
);

userRouter.get(
  "/get-profile",
  authenticateRole(["Admin", "Customer", "Support"]),
  userController.getProfile
);

userRouter.put(
  "/update-my-password",
  authenticateRole(["Admin", "Customer", "Support"]),
  userController.updateMyPassword
);

userRouter.put(
  "/update-password/:id",
  authenticateRole(["Admin"]),
  userController.updatePassword
);

userRouter.get("/", authenticateRole(["Admin"]), userController.getAllUsers);
userRouter.get("/:id", authenticateRole(["Admin"]), userController.getUserById);

module.exports = userRouter;
