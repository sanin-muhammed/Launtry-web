const express = require("express");
const { add_order } = require("../controller/orderController");

const router = express.Router();

router.post("/add_order", add_order);

module.exports = router;
