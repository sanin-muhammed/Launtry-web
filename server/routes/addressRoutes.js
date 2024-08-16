const express = require("express");
const router = express.Router();
const { add_address, all_address, edit_address, delete_address } = require("../controller/addressController");


router.get('/all_address',all_address)
router.post('/add_address',add_address)
router.post('/edit_address',edit_address)
router.delete('/delete_address',delete_address)

module.exports = router;
