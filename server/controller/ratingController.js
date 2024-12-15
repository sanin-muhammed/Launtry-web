const express = require("express");
const Rating = require("../models/rating");

// @des:rating api
// method:get
// api:/rating_exist

exports.check_rating_exist = async (req, res) => {
    try {
        console.log("req query =======", req.query);
        const { id } = req.query;

        const rating = await Rating.findOne({ userId: id });
        console.log("rating ==", rating);

        if (rating) {
            console.log("rating already exist".bold.red);
            res.status(400).json({ error: true, status: false, message: "already added rating" });
        } else {
            console.log("rating not exist".bold.yellow);
            res.status(200).json({ error: false, status: true, message: "rating not exist" });
        }
    } catch (error) {
        console.log("server error".red, error);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};
