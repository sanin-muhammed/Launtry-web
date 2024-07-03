const express = require("express");
const { add_order, all_orders } = require("../controller/orderController");

const router = express.Router();

router.get("/all_orders", all_orders);
router.post("/add_order", add_order);

module.exports = router;
