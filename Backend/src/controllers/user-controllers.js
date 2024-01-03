const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user-model");
const asyncHandler = require("../utils/async-handler");
const { NotFoundError, AppError } = require("../utils/errors");
const { getAll, getOneById } = require("./base-controllers");

exports.registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res
    .status(201)
    .json({ message: "User account created successfully.", data: newUser });
});

exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // Check if user exists
  if (!user) {
    return next(new NotFoundError());
  }

  // Check if password is correct
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return next(new AppError("Invalid Password", 401));
  }

  // Generate an access token with a 10-minute expiration time
  const accessToken = jwt.sign(
    {
      email,
      _id: user._id,
      role: user.role,
      name: user.name,
    },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {
      expiresIn: "10m",
    }
  );

  // Generate a refresh token with a longer expiration time, e.g., 30 days
  const refreshToken = jwt.sign(
    {
      email,
      _id: user._id,
      role: user.role,
      name: user.name,
    },
    process.env.REFRESH_TOKEN_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );

  // Set HTTP-only cookies for the tokens
  res.cookie("access_token", accessToken, {
    httpOnly: true,
    maxAge: 10 * 60 * 10000, // 10 minutes in milliseconds
  });

  res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  });

  // Return the access token and refresh token to the client
  res.status(200).json({ accessToken, refreshToken, user });
});

exports.refreshToken = asyncHandler(async (req, res, next) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return next(new AppError("Refrest Token not provided", 401));
  }

  const decodedToken = jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET_KEY
  );

  const { email, _id, role, name } = decodedToken;

  const accessToken = jwt.sign(
    { email, _id, role, name },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {
      expiresIn: "10m",
    }
  );

  res.cookie("access_token", accessToken, {
    httpOnly: true,
    maxAge: 10 * 60 * 1000, // 10 minutes in milliseconds
  });

  res.status(200).json({ accessToken });
});

exports.createAccount = asyncHandler(async (req, res, next) => {
  const user = req.user;
  const { username, email, password, role } = req.body;

  if (user.role !== "Admin") {
    return next(new AppError("You don't have permission to do this", 401));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    role,
  });

  await newUser.save();

  res.status(200).json({ data: newUser });
});

exports.updateProfile = asyncHandler(async (req, res, next) => {
  const id = req.user._id;

  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ data: user });
});

exports.deleteProfile = asyncHandler(async (req, res, next) => {
  const id = req.user._id;

  await User.findByIdAndDelete(id);

  res.sendStatus(200);
});

exports.getProfile = asyncHandler(async (req, res, next) => {
  const id = req.user._id;

  const user = await User.findById(id);

  if (!user) {
    return next(new NotFoundError("No document found with that ID"));
  }

  res.status(200).json({
    status: "success",
    data: user,
  });
});

exports.updateMyPassword = asyncHandler(async (req, res, next) => {
  const id = req.user._id;
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(id);

  // Check if password is correct
  const validPassword = await bcrypt.compare(oldPassword, user.password);
  if (!validPassword) {
    return next(new AppError("Invalid Password", 401));
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const newUser = await User.findByIdAndUpdate(
    id,
    { password: hashedPassword },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({ data: newUser });
});

exports.updatePassword = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const { newPassword } = req.body;

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const newUser = await User.findByIdAndUpdate(
    id,
    { password: hashedPassword },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({ data: newUser });
});

exports.getAllUsers = getAll(User, ["username", "email"]);
exports.getUserById = getOneById(User);
