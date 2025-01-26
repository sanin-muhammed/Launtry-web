const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "admin", required: true },
    messages: [
      {
        sender: { type: String, enum: ["user", "admin"], required: true },
        content: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        read: { type: Boolean, default: false },
      },
    ],
    lastMessage: {
      content: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("chat", chatSchema);
module.exports = Chat;
