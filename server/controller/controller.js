const Banner = require("../models/banner");



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