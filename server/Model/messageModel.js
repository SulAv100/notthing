const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageModel = new Schema(
  {
    roomId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    receiverId: {
      type: String,
    },
    content: {
      type: String,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    messageType: {
      type: String,
      enum: ["text", "image"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("message", messageModel);
