const express = require("express");
const { rateLimit } = require("express-rate-limit");
const userController = require("../controllers/user-controllers");
const { authenticateRole } = require("../middlewares/auth-role");
const { validate } = require("../middlewares/validate");
const {
  userRegisterSchema,
  userLoginSchema,
  tokenRefreshSchema,
  userCreateSchema,
  userUpdateSchema,
  passwordUpdateSchema,
  passwordOwnUpdateSchema,
} = require("../Schemas/user-schema");

const userRouter = express.Router({ mergeParams: true });

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

userRouter.post(
  "/register",
  limiter,
  userRegisterSchema(),
  validate(["username", "email", "password"]),
  userController.registerUser
);
userRouter.post(
  "/login",
  limiter,
  userLoginSchema(),
  validate(["email", "password"]),
  userController.loginUser
);
userRouter.post(
  "/refresh",
  tokenRefreshSchema(),
  validate(["refreshToken"]),
  userController.refreshToken
);
userRouter.post(
  "/create",
  authenticateRole(["Admin"]),
  userCreateSchema(),
  validate(["username", "email", "password", "role"]),
  userController.createAccount
);

userRouter.put(
  "/update-profile",
  authenticateRole(["Admin", "Customer", "Support"]),
  userUpdateSchema(),
  validate(["username", "email", "role"]),
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
  passwordOwnUpdateSchema(),
  validate(["newPassword", "oldPassword"]),
  userController.updateMyPassword
);

userRouter.put(
  "/update-password/:id",
  authenticateRole(["Admin"]),
  passwordUpdateSchema(),
  validate(["newPassword"]),
  userController.updatePassword
);

userRouter.get("/", authenticateRole(["Admin"]), userController.getAllUsers);
userRouter.get("/:id", authenticateRole(["Admin"]), userController.getUserById);

module.exports = userRouter;
