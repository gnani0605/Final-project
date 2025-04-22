const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Place Order
router.post("/", async (req, res) => {
    const { userId, items, totalAmount, shippingAddress } = req.body;

    try {
        const newOrder = new Order({
            userId,
            items,
            totalAmount,
            shippingAddress
        });

        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully!", order: newOrder });
    } catch (error) {
        res.status(400).json({ error: "Order creation failed!" });
    }
});

// Get User Orders
router.get("/:userId", async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.json(orders);
    } catch (error) {
        res.status(400).json({ error: "Failed to retrieve orders" });
    }
});

module.exports = router;