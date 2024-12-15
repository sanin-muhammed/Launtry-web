const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    otp: {
        required: true,
        type: String,
    },
    expireAt: {
        type: Date,
        required: true,
        default: function () {
            return new Date(Date.now() + 1 * 60 * 1000); // 1 minutes in milliseconds
        },
        index: { expires: 0 },
    },
});

const Otp = mongoose.model("otps", otpSchema);
module.exports = Otp;
