const express = require("express");
const Address = require("../models/address");

// @des:all address api
// method:get
// api:/all_address

exports.all_address = async (req, res) => {
    try {
        const address = await Address.find();
        console.log("address = ", address);
        res.status(200).json({ error: false, status: true, message: "find all address successfully", data: address });
        console.log("find all address successfully".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};

// @des:add address api
// method:post
// api:/add_address

exports.add_address = async (req, res) => {
    console.log(req.body);
    try {
        const { destination, address, phoneNumber } = req.body;

        const newAddress = new Address({ destination, address, phoneNumber });
        await newAddress.save();
        console.log("new address =", newAddress);
        res.status(200).json({ error: false, status: true, message: "added new address " });
        console.log("added new address ".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};

// @des:edit address api
// method:post
// api:/edit_address

exports.edit_address = async (req, res) => {
    console.log(req.body);
    console.log(req.query);
    try {
        const { destination, address, phoneNumber } = req.body;
        const { id } = req.query;
        const editedAddress = await Address.findByIdAndUpdate(id, { destination, address, phoneNumber });
        console.log("edited address =", editedAddress);
        res.status(200).json({ error: false, status: true, message: "address updated " });
        console.log("address updated ".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};

// @des:delete address api
// method:delete
// api:/delete_address

exports.delete_address = async (req, res) => {
    console.log(req.query);
    try {
        const { id } = req.query;
        const deletedAddress = await Address.findByIdAndDelete(id);
        if (!deletedAddress) {
            console.log("address not deleted".bold.red);
            res.status(400).json({ error: true, status: false, message: "address not deleted !" });
            return;
        }
        res.status(200).json({ error: false, status: true, message: "address deleted " });
        console.log("address deleted ".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};
