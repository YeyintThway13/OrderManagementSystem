const { body } = require("express-validator");

const userRegisterSchema = () => {
  return [
    body("username").notEmpty().isString(),
    body("email").notEmpty().isEmail(),
    body("password")
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),
  ];
};

const userLoginSchema = () => {
  return [
    body("email").notEmpty().isEmail(),
    body("password")
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),
  ];
};

const tokenRefreshSchema = () => {
  return [body("refreshToken").notEmpty().isString()];
};

const userCreateSchema = () => {
  return [
    body("username").notEmpty().isString(),
    body("email").notEmpty().isEmail(),
    body("password")
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),
    body("role").notEmpty().isIn(["Customer", "Admin", "Support"]),
  ];
};

const userUpdateSchema = () => {
  return [
    body("username").optional().isString(),
    body("email").optional().isEmail(),
    body("role").optional().isIn(["Customer", "Admin", "Support"]),
  ];
};

const passwordUpdateSchema = () => {
  return [
    body("newPassword")
      .optional()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),
  ];
};

const passwordOwnUpdateSchema = () => {
  return [
    body("newPassword")
      .optional()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),

    body("oldPassword")
      .optional()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),
  ];
};

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  tokenRefreshSchema,
  userCreateSchema,
  userUpdateSchema,
  passwordUpdateSchema,
  passwordOwnUpdateSchema,
};
