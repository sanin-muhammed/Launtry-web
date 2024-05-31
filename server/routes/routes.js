const express = require("express");
const { all_banners } = require("../controller/controller");

const router = express.Router();

router.get("/all_banners", all_banners);

module.exports = router;
