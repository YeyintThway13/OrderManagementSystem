const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectDb = async () => {
  try {
    const database_uri = process.env.MONGO_URI;

    await mongoose.connect(database_uri);
  } catch (error) {
    console.error("Error happening in database connection", error);
  }
};

module.exports = connectDb;
