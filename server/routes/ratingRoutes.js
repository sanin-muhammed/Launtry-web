const express = require("express");
const { check_rating_exist } = require("../controller/ratingController");
const router = express.Router();



router.get("/rating_exist",check_rating_exist)





module.exports = router;
