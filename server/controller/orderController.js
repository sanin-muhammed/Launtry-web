const mongoose = require("mongoose");
const Order = require("../models/order");
const { generateRandomId, createDate } = require("../utils/controllerUtils");

// @des:all orders api
// method:get
// api:/all_orders

exports.all_orders = async (req, res) => {
    console.log(" req query==", req.query);

    try {
        const { id } = req.query;
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: true, status: false, message: "Undefined or Invalid user ID" });
        }
        const aggregationPipeline = [
            {
                $match: { userId: new mongoose.Types.ObjectId(id) }, // Match the order by ID
            },
            {
                $lookup: {
                    from: "users", // The collection name
                    localField: "userId",
                    foreignField: "_id",
                    as: "userDetails",
                },
            },
            {
                $unwind: "$userDetails", // Unwind the userDetails array
            },
            {
                $lookup: {
                    from: "services", // The collection name
                    localField: "serviceId",
                    foreignField: "_id",
                    as: "serviceDetails",
                },
            },
            {
                $unwind: "$serviceDetails", // Unwind the serviceDetails array
            },
            {
                $lookup: {
                    from: "addresses", // The collection name
                    localField: "pickupAddressId",
                    foreignField: "_id",
                    as: "pickupAddressDetails",
                },
            },
            {
                $unwind: "$pickupAddressDetails", // Unwind the pickupAddressDetails array
            },
            {
                $lookup: {
                    from: "addresses", // The collection name
                    localField: "deliveryAddressId",
                    foreignField: "_id",
                    as: "deliveryAddressDetails",
                },
            },
            {
                $unwind: "$deliveryAddressDetails", // Unwind the deliveryAddressDetails array
            },
        ];
        const orders = await Order.aggregate(aggregationPipeline);
        console.log(orders, "==orders");

        res.status(200).json({ error: false, status: true, message: "orders finded", data: orders });
        console.log("orders finded".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red, error);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};

// @des:add order api
// method:post
// api:/add_order

exports.add_order = async (req, res) => {
    console.log("req body", req.body);
    try {
        const { userId, serviceId, products, instructions, pickupDate, pickupAddressId, deliveryAddressId, expectedDelivery, expressDelivery, paymentMethod, totalAmount } = req.body;
        const orderId = generateRandomId();
        const createdDate = createDate();

        const newOrder = new Order({
            orderId,
            userId,
            serviceId,
            products,
            instructions: instructions || null,
            pickupDate,
            pickupAddressId,
            deliveryAddressId,
            expectedDelivery,
            expressDelivery,
            totalAmount,
            paymentMethod,
            paymentStatus: "none",
            orderStatus: "sheduled",
            createdDate,
        });
        await newOrder.save();
        console.log("new order ==", newOrder);

        res.status(200).json({ error: false, status: true, message: "booking confirmed" });
        console.log("booking confirmed".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red, error);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};
