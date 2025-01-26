const express = require("express");
const Chat = require("../models/chats");
const { validateFields } = require("../utils/controllerUtils");

exports.send_message = async (req, res) => {
  console.log("req body =", req.body);

  try {
    const { user, admin, sender, content } = req.body;

    // Validate required fields
    const missingFields = validateFields({ user, admin, sender, content });
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: true,
        status: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    const timestamp = new Date();

    // Find the chat document for this user-admin pair
    let chat = await Chat.findOne({ user, admin });

    if (chat) {
      // If chat exists, update it
      chat.messages.push({ sender, content, timestamp, read: false });
      chat.lastMessage = { content, timestamp };
      await chat.save();
    } else {
      // If chat doesn't exist, create a new one
      chat = new Chat({
        user,
        admin,
        messages: [{ sender, content, timestamp, read: false }],
        lastMessage: { content, timestamp },
      });
      await chat.save();
    }

    return res.status(200).json({
      status: true,
      message: "Message sent successfully",
      data: chat,
    });
  } catch (error) {
    console.log("server error".bold.red, error);
    res.status(500).json({ error: true, status: false, message: "server error" });
  }
};

exports.get_messages = async (req, res) => {
  console.log("req body = ", req.body);
  try {
    const { user, admin } = req.body;

    // Validate required fields
    const missingFields = validateFields({ user, admin });
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: true,
        status: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    const chat = await Chat.findOne({ user, admin });
    return res.status(200).json({
      status: true,
      message: "Messages retrieved successfully",
      data: chat || [],
    });
  } catch (error) {
    console.log("server error".bold.red, error);
    res.status(500).json({ error: true, status: false, message: "server error" });
  }
};
