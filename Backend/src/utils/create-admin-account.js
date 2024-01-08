const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../models/user-model");
const connectDb = require("./database-connect");

const createDefaultAdminAccount = async () => {
  await connectDb();

  const adminExist = await User.findOne({ role: "Admin" });

  const hashedPassword = await bcrypt.hash(
    process.env.DEFAULT_ADMIN_PASSWORD,
    10
  );

  if (!adminExist) {
    const admin = new User({
      username: "Default Admin",
      email: process.env.DEFAULT_ADMIN_EMAIL,
      password: hashedPassword,
      role: "Admin",
    });

    await admin.save();
    console.log("Admin account created.");
  }
  process.exit(0);
};

createDefaultAdminAccount();
