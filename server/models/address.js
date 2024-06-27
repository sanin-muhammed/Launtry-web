const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
});

const Address = mongoose.model("addresses", addressSchema);
module.exports = Address;
