const express = require("express");
const { all_banners, all_offers, all_services, all_products, all_pickups } = require("../controller/controller");

const router = express.Router();

router.get("/all_banners", all_banners);
router.get("/all_offers", all_offers);
router.get("/all_services", all_services);
router.get("/all_products", all_products);
router.get("/all_pickups", all_pickups);

module.exports = router;
