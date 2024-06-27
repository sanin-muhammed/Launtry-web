const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    serviceId: {
        type: String,
        required: true,
    },
    products: {
        type: Array,
        required: true,
    },
    instructions: {
        type: Object,
        required: true,
    },
    pickupDate: {
        type: Object,
        required: true,
    },
    pickupAddressId: {
        type: String,
        required: true,
    },
    deliveryAddress: {
        type: String,
        required: true,
    },
    expectedDelivery: {
        type: Object,
        required: true,
    },
    expressDelivery: {
        type: Boolean,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: String,
        required: true,
    },
    createdDate: {
        type: String,
        required: true,
    },
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
