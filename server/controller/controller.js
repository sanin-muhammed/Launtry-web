const Banner = require("../models/banner");
const Offer = require("../models/offer");
const Service = require("../models/service");



exports.all_banners = async (req, res) => {
    try {
        const banners = await Banner.find();
        console.log({ banners });
        res.status(200).json({ error: false, status: true, message: "find all banners successfully", data: banners });
        console.log("find all banners successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};

exports.all_offers = async (req, res) => {
    try {
        const offers = await Offer.find();
        console.log("offers =", offers);
        res.status(200).json({ error: false, status: true, message: "find all offers successfully", data: offers });
        console.log("find all offers successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};

exports.all_services = async (req, res) => {
    try {
        const services = await Service.find();
        console.log({ services });
        res.status(200).json({ error: false, status: true, message: "find all services successfully", data: services });
        console.log("find all services successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};