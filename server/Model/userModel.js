const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userModel = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["expert", "user"],
    default: "user",
  },
});

module.exports = mongoose.model("Users", userModel);
