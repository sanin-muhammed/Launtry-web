const express = require("express");
const { send_message, get_messages } = require("../controller/chatController");
const { authentication } = require("../utils/jwt");
const router = express.Router();

router.get('/get_messages',get_messages)
router.post('/send_message',authentication,send_message)



module.exports = router;