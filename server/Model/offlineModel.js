const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const offlineRequestModel = new Schema({
  roomId: {
    type: String,
  },
  sender: {
    type: String,
  },
  receiver: {
    type: String,
  },
  senderName: {
    type: String,
  },
  receiverName: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("OfflineRequest", offlineRequestModel);
