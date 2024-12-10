require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection Vayo");
  } catch (error) {
    console.log("Connection Failed");
    process.exit(0);
  }
};
module.exports = connectDB;
