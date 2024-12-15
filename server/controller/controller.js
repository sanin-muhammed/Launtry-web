const Banner = require("../models/banner");
const Offer = require("../models/offer");
const Pickup = require("../models/pickup");
const Product = require("../models/product");
const Service = require("../models/service");

// @des:all banners api
// method:get
// api:/all_banners

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

// @des:all offers api
// method:get
// api:/all_offers

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

// @des:all services api
// method:get
// api:/all_services

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

// @des:all products api
// method:get
// api:/all_products

exports.all_products = async (req, res) => {
    try {
        const products = await Product.find();
        console.log({ products });
        res.status(200).json({ error: false, status: true, message: "find all products successfully", data: products });
        console.log("find all products successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};
// @des:all pickup address api
// method:get
// api:/all_pickups

exports.all_pickups = async (req, res) => {
    try {
        const pickups = await Pickup.find();
        console.log({ pickups });
        res.status(200).json({ error: false, status: true, message: "find all pickups successfully", data: pickups });
        console.log("find all pickups successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};