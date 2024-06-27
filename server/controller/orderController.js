const Order = require("../models/order");
const { generateRandomId, createDate } = require("../utils/controllerUtils");

exports.add_order = async (req, res) => {
    console.log("req body", req.body);
    try {
        const { userId, serviceId, products, instructions, pickupDate, pickupAddressId, deliveryAddress, expectedDelivery, expressDelivery, paymentMethod,totalAmount } = req.body;
        const orderId = generateRandomId();
        const createdDate = createDate();

        const newOrder = new Order({ orderId, userId, serviceId, products, instructions, pickupDate, pickupAddressId, deliveryAddress, expectedDelivery, expressDelivery,totalAmount, paymentMethod, paymentStatus: "sheduled",createdDate });
        await newOrder.save();
        console.log("new order ==", newOrder);

        res.status(200).json({ error: false, status: true, message: "booking confirmed" });
        console.log("booking confirmed".bold.yellow);
    } catch (error) {
        console.log("server error".bold.red,error);
        res.status(500).json({ error: true, status: false, message: "server error" });
    }
};
