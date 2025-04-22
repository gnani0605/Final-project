const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Create new product (Admin only)
router.post("/", async (req, res) => {
    const { name, category, price, images } = req.body;
    const product = new Product({ name, category, price, images });

    try {
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: "Failed to add product" });
    }
});

module.exports = router;
