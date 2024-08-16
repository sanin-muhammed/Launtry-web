const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
});

const Rating = mongoose.model("ratings", ratingSchema);
module.exports = Rating;
