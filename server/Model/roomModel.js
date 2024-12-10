const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomModel = new Schema({
  roomId: {
    type: String,
  },
  user1id: {
    type: String,
  },
  user2id: {
    type: String,
  },
});

module.exports = mongoose.model("Rooms", roomModel);
